const moongoose = require ("mongoose");

const marathonSchema = new moongoose.Schema({
    // ispaid: {type:Boolean, default:false},
    // isavailable: {type:Boolean, default:false},
    // image:{data:Buffer, contentType: String},
    // title:String,
    // subtitle:String,
    // description:String,
    // noofdays:Number,
    // cost:Number,
    // usdcost:Number,
    // materialavailability:Number,
    // ispublic:{type:Boolean, default:false},
    // isdisplay:{type:Boolean, default:false},
    // contest:{type:Boolean, default:false},
    // comment:{type:Boolean, default:false},
    // autocrop:{type:Boolean, default:false},
    //  language:String,
    //  parentssc:String,
    //  startdate:Date,
    //  contestupload:Date,
    //   finalist:Date,
    //   voting:Date,
    //   winner:Date

    ispaid: String,
    isavailable: String,
    image:String,
    title:String,
    subtitle:String,
    description:String,
    noofdays:String,
    cost:String,
    usdcost:String,
    materialavailability:Number,
    ispublic:String,
    isdisplay:String,
    contest:String,
    comment:String,
    autocrop:String,
     language:String,
     parentssc:String,
     startdate:String,
     contestupload:String,
      finalist:String,
      voting:String,
      winner:String
});
module.exports = moongoose.model("marathon",marathonSchema)