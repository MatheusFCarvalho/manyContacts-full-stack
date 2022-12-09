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

    @Column({ unique: true })
    email: string;

    @ManyToOne((type) => Client, { nullable: false, onDelete: "CASCADE" })
    client: Client;

}

export default EmailClient;