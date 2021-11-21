/*
 * All routes for admin are defined here
 * Since this file is loaded in server.js into /,
 *   these routes are mounted onto /
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

//helper functions
const { varInit, authenticateUser, getUserByEmail } = require("../lib/utils");

const bcrypt = require("bcryptjs");
const { ObjectId } = require("bson");

// const admins = require('../lib/adminUsers')
//generate order uuid
// const { v4: uuidv4 } = require('uuid');

// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const twilio = {
  account_sid: process.env.TWILIO_ACCOUNT_SID,
  auth_token: process.env.TWILIO_AUTH_TOKEN,
};

//const client = require('twilio')(accountSid, authToken);

//creates new user
const createUser = (name, email, password) => {
  password = bcrypt.hashSync(password, 10);
  user = { name, email, password };
  return user;
};


const findUserByEmail = (email) => {
  const dbConn = dbo.getDb();
  dbConn
    .collection("users")
    .find()
    .toArray(function (err, user) {
      if (err) throw err;
      return (user);
    })
};

//get timestamp and return friendly format
const getTimestamp = (minutes) => {
  let months = ['Jan', 'Feb', 'Mar', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    now = new Date(Date.now() + minutes * 60 * 1000),
    formatted = now.getFullYear() + ' ' + months[now.getMonth() - 1] + ' ' + now.getDate() + ' ' +
      now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0') +
      ':' + now.getSeconds().toString().padStart(2, '0');
  return formatted;
};


module.exports = (router, dbo) => {
  //register new user
  router.get("/register", (req, res) => {
    //check if we are already logged in
    const userId = req.session.user_id;

    // if (userId && usersdB[userId]) {
    //   res.redirect('/urls');
    // }
    //initalize template vars
    const templateVars = varInit(false, null, null, null);
    res.render("register", templateVars);
  });

  //T_T
  router.post("/register", (req, res) => {
    const { name, email, password } = req.body;
    const dbConn = dbo.getDb();

    dbConn
      .collection("users")
      .find({ email: email })
      .toArray(function (err, user) {
        if (err) throw err;
        console.log({ user, name, email, password });

        //check if user exist
        if (user.length > 0 && user[0].email === email) {
          //errCode 410: user exist
          console.log("user exists ");
          const templateVars = varInit(false, 410, user, null);
          res.render("register", templateVars);
          return;
        } else if (!email || !password) {
          console.log("errCode 400: Invalid user name or password");
          const templateVars = varInit(false, 400, user, null);
          res.render("register", templateVars);
          return;
        }

        bcrypt.hash(password, 10, function (err, hash) {
          // Store hash in your password DB.

          user = { name, email, hash };
          // //user and password are OK - create new
          // const newUser = createUser(name, email, password);
          // //wirte new user to usersdB
          // usersdB[newUser.id] = newUser;

          dbConn.collection("users").insertOne(user);

          res.json({ name, email, password, hash });
        });

        // const user = getUserByEmail(email, usersdB);
      });

    //create session cookie
    // req.session.user_id = newUser.id;
    // res.redirect("/urls");
  });

  router.get("/users", (req, res) => {
    const dbConn = dbo.getDb();
    dbConn
      .collection("users")
      .find()
      .toArray(function (err, result) {
        if (err) throw err;
        res.json(result);
      });
  });

  router.get("/login", (req, res) => {
    //check if we are already logged in
    const userId = req.session.user_id;
    console.log("viewsjs router:", userId);

    const dbConn = dbo.getDb();

    dbConn
      .collection("users")
      .find(ObjectId(userId))
      .toArray((err, user) => {
        if (err) throw err;

        console.log(user);
        user = user[0];
        if (user) {
          res.redirect("/sites");
        }
        //initialize template variable,
        //if we are here we are not logged in
        const templateVars = varInit(false, null, null, null);
        res.render("login", templateVars);
      });
  });

  router.post("/login", (req, res) => {
    //parse user email and password
    const { email, password } = req.body;
    console.log({ email, password });
    const dbConn = dbo.getDb();

    dbConn
      .collection("users")
      .find({ email: email })
      .toArray((err, user) => {
        if (err) throw err;

        user = user[0];

        bcrypt.compare(password, user.hash, function (err, result) {
          // result == true

          console.log({ result });
          if (!result) {
            //authentication failed -
            //redirect to login with appropriate error message
            const templateVars = varInit(false, 410, null, null);
            res.render("login", templateVars);
            return;
          }

          req.session.user_id = user._id;
          console.log(`------------[user.id]--------------\n`, user._id);

          const vars = varInit(true, 200, user, null);
          res.status(200).send([vars]);
          // res.redirect('/me');
          return;
        });
      });

    // authenticate if matching user found
  });

  router.get("/logout", (req, res) => {
    //clears cookie and redirect to login page
    req.session = null;
    const templateVars = varInit(false, 200, null, null);
    res.redirect("login");
  });

  return router;
};
// router.get("/sites", (req, res) => {

//   db.query(`SELECT * FROM categories ;`)
//     .then(data => {
//       const orders = data.rows;

//       const userId = req.session.user_id;
//       user = admins[userId];

//       templateVars = varInit(true, 200, user, orders);
//       // return orders
//       // res.send(orders)
//       res.json(templateVars);

//     })
//     .catch(err => {
//       res
//         .status(500)
//         .json({ error: err.message });
//     });

// });

// router.post("/sites/complete", (req, res) => {

//   order = req.body;
//   console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', order);
//   params = [getTimestamp(0), order.order_no];

//   //res.render('locals',{order})
//   //return
//   const query = `
//   UPDATE orders SET completed = true, completed_time = $1
//   WHERE order_no = $2
//   returning *;
//   `;

//   db.query(query, params)
//     .then(data => {
//       const order = data.rows;

//       //do SMS API call
//       // client.messages
//       //   .create({
//       //     body: ' parsecs?',
//       //     from: '+16132618437',
//       //     to: '+16132618437'
//       //   })
//       //   .then(message => console.log(message.sid));

//       console.log(order);
//       const userId = req.session.user_id;
//       user = admins[userId];

//       templateVars = varInit(true, 200, user, order);
//       res.send(order);
//       // res.render('orders', templateVars);
//     })
//     .catch(err => {
//       res
//         .status(500)
//         .json({ error: err.message });
//     });
// });

// router.post("/sites/update", (req, res) => {

//   order = req.body;
//   console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', order);

//   const est_time = getTimestamp(order.estimated_time);

//   params = [est_time, order.order_no];

//   //res.render('locals',{order})
//   //return
//   const query = `
//   UPDATE orders SET estimated_time = $1
//   WHERE order_no = $2
//   returning *;
//   `;

//   db.query(query, params)
//     .then(data => {
//       const order = data.rows;

//       console.log(order);
//       //do SMS API call
//       // client.messages
//       //   .create({
//       //     body: ' parsecs?',
//       //     from: '+16132618437',
//       //     to: '+16132618437'
//       //   })
//       //   .then(message => console.log(message.sid));

//       res.send(order);
//     })
//     .catch(err => {
//       res
//         .status(500)
//         .json({ error: err.message });
//     });
// });

// router.post("/sites/new", (req, res) => {

//   order = req.body;

//   const { user, cart } = order;

//   //res.send(order);

//   params = [user.name, user.phone, user.email];

//   const query = `
//   INSERT INTO customers (name, phone, email)
//   VALUES ($1, $2, $3)
//   returning *;
//   `;

//   //insert customer info into customer table
//   db.query(query, params)
//     .then(data => {
//       const customer = data.rows;
//       console.log('customer\n', customer);
//       return customer;

//     })
//     .then(customer => {

//       //generate uuid for each click
//       const order_no = uuidv4().substring(0, 10);
//       customer_id = customer[0].id;

//       // const order_time = new Date().toISOString();
//       const order_time = getTimestamp(0);
//       let orderInfo = '';
//       for (const item in cart) {
//         if (item !== 'note') {
//           orderInfo = orderInfo +
//             `${cart[item].qty}x ${cart[item].title} |\n`;
//         }
//       }

//       orderInfo += 'Note:' + cart.note;

//       // orderInfo = {};
//       // for (const item in cart) {
//       //   if (item !== 'note') {
//       //     orderInfo[item] = {
//       //       qty: cart[item].qty,
//       //       title: cart[item].title,
//       //     };
//       //   }
//       //   orderInfo.note = cart.note;
//       // }
//       // console.log(JSON.stringify(orderInfo));

//       // params = [customer_id, order_no, order_time, JSON.stringify(orderInfo)];
//       params = [customer_id, order_no, order_time, orderInfo];

//       const query = `
//       INSERT INTO orders (customer_id, order_no,order_time,  order_note)
//       VALUES ($1, $2, $3, $4)
//       returning *`;

//       console.log(params, '\n', query);

//       //insert order info into orders table
//       return db.query(query, params)
//         .then(data => {
//           const order = data.rows;
//           console.log('customer\n', order);
//           // res.send(order)
//           return order;
//           // res.send(order)
//           // const obj = Object.assign({},  ...order, ...customer);
//           // const templateVars = varInit(false, 200, null, obj);
//           //res.send(obj);
//           // res.render('checkout', templateVars);

//         });
//     })
//     .then(order => {

//       // return

//       console.log('order--------------------------', order);

//       //insert into item_order table with QTY and item ID and orderID

//       let query = 'INSERT INTO items_orders (order_id, item_id, quantity) \n values';
//       for (const lineItem in cart) {
//         if (lineItem !== 'note') {
//           console.log('________________[lineItem]______________________');
//           params = [order[0].id, lineItem, cart[lineItem].qty];

//           query = query + '(' + params.join(",") + "),\n";

//         };

//       }
//       query = query.slice(0, query.length - 2);
//       // console.log(query)

//       query = query + '\nreturning *;';
//       // console.log(query)

//       return db.query(query)
//         .then(data => {
//           const orderInfo = data.rows;
//           console.log(orderInfo);
//           res.send(order);
//         });

//     }).catch(err => {
//       res
//         .status(500)
//         .json({ error: err.message });
//     });
// });

// router.get("/sites/active", (req, res) => {

//   db.query(`SELECT * FROM orders where completed = false
//   Order by order_time desc; `)
//     .then(data => {
//       const orders = data.rows;
//       const userId = req.session.user_id;
//       user = admins[userId];

//       templateVars = varInit(true, 200, user, { orders, active: true });
//       // return orders
//       //res.send(orders);
//       res.json(templateVars);

//     })
//     .catch(err => {
//       res
//         .status(500)
//         .json({ error: err.message });
//     });
// });

// router.get("/sites/history", (req, res) => {

//   db.query(`SELECT * FROM orders where completed = true`)
//     .then(data => {
//       const orders = data.rows;

//       const userId = req.session.user_id;
//       user = admins[userId];

//       templateVars = varInit(true, 200, user, { orders, active: false });
//       // return orders
//       //res.send(orders)
//       res.json(templateVars);

//     })
//     .catch(err => {
//       res
//         .status(500)
//         .json({ error: err.message });
//     });
// });

// router.get("/me", (req, res) => {
//   const userId = req.session.user_id;
//   if (!userId) {
//     res.send({ message: "not logged in" });
//     return;
//   }
//   const user = admins[userId]
//   const logged = true
//   res.json({ emoji: "🤗", logged, user: user.name, admins, twilio });

// });

// return router;
// };;