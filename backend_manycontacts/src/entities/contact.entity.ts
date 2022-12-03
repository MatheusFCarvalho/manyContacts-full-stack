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

    @OneToMany((type) => EmailContact, (email) => email.contact)
    email: EmailContact[];

    @OneToMany((type) => PhoneContact, (phone) => phone.contact)
    phone: PhoneContact[];

    @ManyToOne((type) => Client, { nullable: false })
    client: Client;

    @CreateDateColumn()
    createdAt: Date;
}

export default Contact;