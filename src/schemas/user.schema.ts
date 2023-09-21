import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document, HydratedDocument } from "mongoose";

@Schema()
export class User extends Document {
    @Prop()
    first_name: string;

    @Prop()
    last_name: string;

    @Prop()
    email: string;

    @Prop()
    password: string;

    @Prop()
    refesh_token: string;

    @Prop()
    status: string
}

export const UserSchema = SchemaFactory.createForClass(User);