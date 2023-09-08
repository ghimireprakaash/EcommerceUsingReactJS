import mongoose, { Schema, model} from 'mongoose';

const CategorySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    product_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        default: null,
    },
    description: {
        type: String,
    },
    image: {
        type: String,
    },
    order_number: {
        type: Number,
        default: 0
    },
},{
    versionKey: false
})

export default model('Category', CategorySchema);