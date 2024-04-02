// backend/models/Cart.js
import mongoose, { Schema } from "mongoose";

const dataSchema = new Schema({
        id: { type: Number, required: true },
        name: { type: String, required: true },
        image: { type: String, required: true }
});

const Data = mongoose.models.Data || mongoose.model('Data', dataSchema);

export default Data;
