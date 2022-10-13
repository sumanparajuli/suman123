const express = require('express')
const { mongoose } = require('mongoose')

const manSchema = mongoose.Schema({
    ranking: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    dob: {
        type: Date,
        required: true,
        trim: true
    },
    country: {
        type: String,
        required: true,
        trim: true,
    },
    score: {
        type: Number,
        required: true,
        unique: true
    },
    event: {
        type: String,
        default: "100m",
    }
})

const MensRanking = mongoose.model('MensRanking', manSchema)

module.exports = MensRanking