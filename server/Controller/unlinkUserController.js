const unlinkUserModel = require("../Model/unlinkUserModel.js")

// add new unlink user controller

const addUnlinkUserController = async(req,res) =>{
    try {
        const {name,demateId} = req.body

        const data = await unlinkUserModel.create({name,demateId})
        data.save()

        res.status(200).send({
            success:true,
            message:"Unlink User Add successfully",
            data
        })

    } catch (error) {
        console.log(error)  
        res.status(500).send({
            success:false,
            message:"Error while add unlink user",
            error
        })
    }
}


// all ublink user get
const getUnlinkUserController=async(req,res)=>{
    try {
      const data = await unlinkUserModel.find({})
      res.status(200).send({
        success:true,
        message:"Get unlink user successfully",
        data
      })  
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"Error white get all unlink user",
            error
        })
    }
}

// find by id
const findUnlinkUserController=async(req,res)=>{
    try {
        const {id} = req.params
        const user = await unlinkUserModel.findById(id)
        res.status(200).send({
            success:true,
            message:"Get successfully user Record",
            user
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"Error white find unlink user",
            error
        })
    }
}   

const getUnlinkUserDataController  = async(req,res)=>{
    try {
        res.status(200).send({
            "status": 200,
            "message": "unliked user data",
            "data": {
                "userTradeData": [
                    {
                        "date": "5/27/2024",
                        "data": [
                            {
                                "index": "FINNIFTY24MAY18500PE",
                                "transaction_type": "SELL",
                                "reason": "Markets are closed right now. Try placing an after market order (AMO).", //[Read more.](https://support.zerodha.com/category/trading-and-markets/kite-web-and-mobile/articles/what-is-amo-and-when-can-we-place-it),
                                "linkTime": "5/26/2024, 21:38:00",
                                "unlinkTime": "5/24/2024, 14:33:55"
                            },
                            {
                                "index": "FINNIFTY24MAY18500PE",
                                "transaction_type": "SELL",
                                "linkTime": "5/26/2024, 21:38:00",
                                "unlinkTime": "5/24/2024, 14:33:55"
                            }
                        ]
                    },
                    {
                        "date": "6/13/2024",
                        "data": [
                            {
                                "index": "SENSEX24JUN77500CE",
                                "transaction_type": "SELL",
                                "reason": "Incorrect `api_key` or `access_token`.",
                                "linkTime": "6/13/2024, 10:25:19",
                                "unlinkTime": "6/12/2024, 18:53:01"
                            }
                        ]
                    }
                ],
                "code": 1,
                "user_name": "Hardik Akbari",
                "totalNumberOfRecord": 8,
                "numberOfRecord": 2
            },
            "error": {}
        }
    )
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"Error while getting user Record",
            error
        })
    }
}


module.exports = {
    addUnlinkUserController,
    getUnlinkUserController,
    findUnlinkUserController,
    getUnlinkUserDataController
}