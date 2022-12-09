import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    ManyToOne,
} from "typeorm";
import Client from "./client.entity";

@Entity("phoneClient")
class PhoneClient {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ unique: true })
    phone: string;

    @ManyToOne((type) => Client, { nullable: false, onDelete: "CASCADE" })
    client: Client;

}

export default PhoneClient;