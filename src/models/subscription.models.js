
import mongoose, {Schema} from "mongoose";

const subcriptionSchema = new Schema({
    Subscription:{
        type:Schema.Types.ObjectId, //one who is     subscribing
        ref:"User",
    },
    channel:{
        type:Schema.Types.ObjectId, //one to whom is  subscribing
        ref:"User",
    },
    Subscription:{
        type:Schema.Types.ObjectId, //one who is     subscribing
        ref:"User",
    },

},{timestamps: true})


export const Subscription = mongoose.model("Subscription", subcriptionSchema)