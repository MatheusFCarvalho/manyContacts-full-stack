import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    ManyToOne,
} from "typeorm";
import Client from "./client.entity";

@Entity("emailClient")
class EmailClient {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column({ unique: true })
    email: string;

    @CreateDateColumn()
    createdAt: Date;

    @ManyToOne((type) => Client, { nullable: false, eager: true })
    client: Client;

}

export default EmailClient;