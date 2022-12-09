import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    ManyToOne,
} from "typeorm";
import Contact from "./contact.entity";

@Entity("phoneContact")
class PhoneContact {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    phone: string;

    @ManyToOne((type) => Contact, { nullable: false, onDelete: "CASCADE" })
    contact: Contact;

}

export default PhoneContact;