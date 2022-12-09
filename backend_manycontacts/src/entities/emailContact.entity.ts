import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    ManyToOne,
} from "typeorm";
import Contact from "./contact.entity";

@Entity("emailContact")
class EmailContact {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    email: string;


    @ManyToOne((type) => Contact, { nullable: false, onDelete: "CASCADE" })
    contact: Contact;
}

export default EmailContact;