import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    OneToMany,
    ManyToOne,
} from "typeorm";
import PhoneContact from "./phoneContact.entity";
import EmailContact from "./emailContact.entity";
import Client from "./client.entity";

@Entity("contact")
class Contact {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @OneToMany((type) => EmailContact, (email) => email.contact, { eager: true })
    emails: EmailContact[];

    @OneToMany((type) => PhoneContact, (phone) => phone.contact, { eager: true })
    phones: PhoneContact[];

    @ManyToOne((type) => Client, { nullable: false, onDelete: "CASCADE" })
    client: Client;

}

export default Contact;