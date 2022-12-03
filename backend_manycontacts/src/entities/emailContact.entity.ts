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
    name: string;

    @Column({ unique: true })
    email: string;

    @CreateDateColumn()
    createdAt: Date;

    @ManyToOne((type) => Contact, { nullable: false, eager: true })
    contact: Contact;

}

export default EmailContact;