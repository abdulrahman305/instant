const InstantORM = require('@instant.dev/orm');
const Instant = new InstantORM();

/**
 * Logs a user out
 */
module.exports = async (username, password, grant_type, context) => {

  await Instant.connect();
  const User = Instant.Model('User');

  let accessToken = await User.logout(context.http.headers);
  return accessToken;

};
