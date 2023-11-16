const passport = require("passport");
const passportJwt = require("passport-jwt");

const { KEY_JWT } = process.env;
const User = require("../models/User");

passport.use(
  new passportJwt.Strategy( 
    {
      jwtFromRequest: passportJwt.ExtractJwt.fromAuthHeaderAsBearerToken(), 
      secretOrKey: KEY_JWT, 
    },
    async (jwt_payload, done) => {
      console.log(jwt_payload);
      try {
        let user = await User.findOne({ _id: jwt_payload.id }); 
        if (user) {
          user = {
            id: user._id,
            userId:user._id,
            name: user.name,
            lastName: user.lastName,
            email: user.email,         
            age: user.age,
            role: user.role,
            logged: user.logged
          };
          return done(null, user);
        } else {
          return done(null, false);
        }
      } catch (error) {
        console.log(error);
        return done(error, false);
      }
    }
  )
);

module.exports = passport;