const express = require("express")

const getUpgraders = async (req, res) =>{
  try {
    const {data} = req.body;
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

module.exports = { getUpgraders };