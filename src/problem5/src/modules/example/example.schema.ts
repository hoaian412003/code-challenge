import mongoose, { Schema } from 'mongoose';
import joi from 'joi';

export type Example = {
  name: string;
  description?: string;
}

export const exampleSchema = new Schema({
  name: String,
  description: String,
}, {
  timestamps: true
})

export const exampleModel = mongoose.model('Example', exampleSchema);

export const createExampleSchema = {
  body: joi.object({
    name: joi.string().required(),
    description: joi.string().optional(),
  })
}

export const updateExampleSchema = {
  params: joi.object({
    id: joi.string().required()
  }),
  body: joi.object({
    name: joi.string().optional(),
    description: joi.string().optional(),
  })
}

export const deleteExampleSchema = {
  params: joi.object({
    id: joi.string().required()
  })
}

export const getExampleSchema = {
  params: joi.object({
    id: joi.string().required()
  })
}

export const getExamplesSchema = {
  query: joi.object({
    page: joi.number().optional(),
    limit: joi.number().optional(),
    search: joi.string().optional(),
  })
}
