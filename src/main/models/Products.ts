import mongoose from "mongoose";

export interface IProduct {
  id?: string;
  code?: number;
  status: string;
  imported_t: Date;
  url: string;
  creator: string;
  created_t: number;
  last_modified_t: number;
  product_name: string;
  quantity: string;
  brands: string;
  categories: string;
  labels: string;
  cities: string;
  purchase_places: string;
  stores: string;
  ingredients_text: string;
  traces: string;
  serving_size: string;
  serving_quantity: number;
  nutriscore_score: number;
  nutriscore_grade: string;
  main_category: string;
  image_url: string;
}

export const ProductSchema = new mongoose.Schema({
  code: {
    type: Number,
    required: true,
    unique: true,
  },
  status: {
    type: String,
    required: true,
  },
  imported_t: {
    type: Date,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  creator: {
    type: String,
    required: true,
  },
  created_t: {
    type: Number,
    required: true,
  },
  last_modified_t: {
    type: Number,
    required: true,
  },
  product_name: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
  brands: {
    type: String,
    required: true,
  },
  categories: {
    type: String,
    required: true,
  },
  labels: {
    type: String,
    required: true,
  },
  cities: {
    type: String,
    required: true,
  },
  purchase_places: {
    type: String,
    required: true,
  },
  stores: {
    type: String,
    required: true,
  },
  ingredients_text: {
    type: String,
    required: true,
  },
  traces: {
    type: String,
    required: true,
  },
  serving_size: {
    type: String,
    required: true,
  },
  serving_quantity: {
    type: Number,
    required: true,
  },
  nutriscore_score: {
    type: Number,
    required: true,
  },
  nutriscore_grade: {
    type: String,
    required: true,
  },
  main_category: {
    type: String,
    required: true,
  },
  image_url: {
    type: String,
    required: true,
  },

  fieldToIndex: { type: String, index: true },
});

ProductSchema.index({ fieldToIndex: 1 });

export const Product = mongoose.model("Product", ProductSchema);
