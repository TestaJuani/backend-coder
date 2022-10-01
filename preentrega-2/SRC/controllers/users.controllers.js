const usersCrtl= {};

usersCrtl.getUser = (req,res)=> res.json({title:"Getter User"});

usersCrtl.createUser = (req,res)=> res.json({message:"User save"});


usersCrtl.deleteUser = (req,res)=> res.json({message:"User Deleted"});

module.exports =usersCrtl;