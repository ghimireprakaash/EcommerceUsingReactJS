import mongoose, { Schema, model} from 'mongoose';

const ProductGallerySchema = new Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
    },
    image: {
        type: String,
    },
},{
    versionKey: false
})

export default model('ProductGallery', ProductGallerySchema);