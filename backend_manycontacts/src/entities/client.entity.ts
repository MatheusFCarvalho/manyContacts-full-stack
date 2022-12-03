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

    @OneToMany((type) => EmailClient, (email) => email.client)
    emails: EmailClient[];

    @OneToMany((type) => PhoneClient, (phone) => phone.client)
    phones: PhoneClient[];

    @OneToMany((type) => Contact, (contact) => contact.client)
    contacts: Contact[];

    @CreateDateColumn()
    createdAt: Date;
}

export default Client;