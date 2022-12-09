import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    OneToMany,
} from "typeorm";
import PhoneClient from "./phoneClient.entity";
import EmailClient from "./emailClient.entity";
import Contact from "./contact.entity";

@Entity("client")
class Client {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @OneToMany((type) => EmailClient, (email) => email.client, { eager: true })
    emails: EmailClient[];

    @OneToMany((type) => PhoneClient, (phone) => phone.client, { eager: true })
    phones: PhoneClient[];

    @OneToMany((type) => Contact, (contact) => contact.client, { eager: true })
    contacts: Contact[];

    @CreateDateColumn()
    createdAt: Date;
}

export default Client;