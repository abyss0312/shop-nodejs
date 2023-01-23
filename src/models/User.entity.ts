import { Entity,Column,BaseEntity,PrimaryGeneratedColumn,CreateDateColumn } from "typeorm";




@Entity()
export class User extends BaseEntity{
    
    @PrimaryGeneratedColumn()
    Id:number;

    @Column()
    username:string;

    @Column()
    password:string;

    @Column()
    firstname:string;

    @Column()
    lastname:string;

    @Column({default:true})
    isActive: boolean;

    @CreateDateColumn()
    createdDate:Date;

    @Column()
    email:string;

    @Column({default:''})
    phonenumber:string;

    @Column()
    userType: number;

    @Column({default:''})
    token:string;





}