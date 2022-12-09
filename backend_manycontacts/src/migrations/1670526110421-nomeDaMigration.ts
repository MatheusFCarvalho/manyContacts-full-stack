import { MigrationInterface, QueryRunner } from "typeorm";

export class nomeDaMigration1670526110421 implements MigrationInterface {
    name = 'nomeDaMigration1670526110421'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "phoneClient" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "phone" character varying NOT NULL, "clientId" uuid NOT NULL, CONSTRAINT "UQ_6b0d004172114558f11aa5263cb" UNIQUE ("phone"), CONSTRAINT "PK_4c5c1b89b52f2bf352e52566717" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "emailClient" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "email" character varying NOT NULL, "clientId" uuid NOT NULL, CONSTRAINT "UQ_e4a4168c684934523f60cb70cf7" UNIQUE ("email"), CONSTRAINT "PK_f9ea74ff91ceb0a81e2a33e7205" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "phoneContact" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "phone" character varying NOT NULL, "contactId" uuid NOT NULL, CONSTRAINT "PK_4e64ee9566af7e493125d1731c4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "emailContact" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "email" character varying NOT NULL, "contactId" uuid NOT NULL, CONSTRAINT "PK_941c622e6fed05ae4f8a9dcb4c2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "contact" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "clientId" uuid NOT NULL, CONSTRAINT "PK_2cbbe00f59ab6b3bb5b8d19f989" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "client" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_96da49381769303a6515a8785c7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "phoneClient" ADD CONSTRAINT "FK_4932db654975f0ce0c10585c9e7" FOREIGN KEY ("clientId") REFERENCES "client"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "emailClient" ADD CONSTRAINT "FK_9e4acd8ef0ad6f5559703cc53b2" FOREIGN KEY ("clientId") REFERENCES "client"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "phoneContact" ADD CONSTRAINT "FK_3ced1dcb0e2f8e4ad6c32e0bc0c" FOREIGN KEY ("contactId") REFERENCES "contact"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "emailContact" ADD CONSTRAINT "FK_3de3023f5e05bdbe663272e4790" FOREIGN KEY ("contactId") REFERENCES "contact"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "contact" ADD CONSTRAINT "FK_e99f8e5bcbccaec7b0b7ed65526" FOREIGN KEY ("clientId") REFERENCES "client"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contact" DROP CONSTRAINT "FK_e99f8e5bcbccaec7b0b7ed65526"`);
        await queryRunner.query(`ALTER TABLE "emailContact" DROP CONSTRAINT "FK_3de3023f5e05bdbe663272e4790"`);
        await queryRunner.query(`ALTER TABLE "phoneContact" DROP CONSTRAINT "FK_3ced1dcb0e2f8e4ad6c32e0bc0c"`);
        await queryRunner.query(`ALTER TABLE "emailClient" DROP CONSTRAINT "FK_9e4acd8ef0ad6f5559703cc53b2"`);
        await queryRunner.query(`ALTER TABLE "phoneClient" DROP CONSTRAINT "FK_4932db654975f0ce0c10585c9e7"`);
        await queryRunner.query(`DROP TABLE "client"`);
        await queryRunner.query(`DROP TABLE "contact"`);
        await queryRunner.query(`DROP TABLE "emailContact"`);
        await queryRunner.query(`DROP TABLE "phoneContact"`);
        await queryRunner.query(`DROP TABLE "emailClient"`);
        await queryRunner.query(`DROP TABLE "phoneClient"`);
    }

}
