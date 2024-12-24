// 1-> show dbs 
// 2-> use admin 
// 3-> show collections 
// 4-> db.peopleectiionName -> db.people

// 1- SELECT * FROM people 
//* db.people.find()

// 2- SELECT id, userId, status FROM people 
//* db.people.find({}, {id: true, userId: true, status:true})

// 3- SELECT user_id, status FROM people
//* db.people.find({}, {userId: 1, status:1})

//^ true  || 1 demek bu sütunu-column getir
//! false || 0 demek bu sütunu-column getirme

// 4- SELECT * FROM people WHERE status = 'A'
//* db.people.find({status: 'A'})

// 5- SELECT user_id, status FROM people WHERE status = 'A'
//* db.people.find({status: 'A'}, {user_id: 1, status: 1})

// 6- SELECT * FROM people WHERE status != 'A'
//* db.people.find({status: { $ne: 'A' }})

// 7- SELECT * FROM people WHERE status = 'A' AND age = 50
//* db.people.find({ $and: [{ 'status': 'A' }, { 'age': 16 }] })
//* db.people.find({status: 'A', age: 50})

// 8- SELECT * FROM people WHERE status = 'A' OR age = 50
//* db.people.find({ $or: [{ 'status': 'A' }, { 'age': 50 }] })

// 9- SELECT * FROM people WHERE age > 25
//* db.peole.find({ age: { $gt: 25 } })

// 10- SELECT * FROM people WHERE age < 25
//* db.people.find({ 'age': { $lt: 25 } })

// 11- SELECT * FROM people WHERE age > 25 AND age <= 50
//* db.people.find({ age: { $gt: 25, $lte: 50 } })

// 12- SELECT * FROM people WHERE user_id LIKE '%bc%'
//* db.people.find({user_id: /bc/i}) 

// 13- SELECT * FROM people WHERE status = 'A' ORDER BY user_id ASC
//* db.people.find({status: 'A'}).sort({user_id: 'asc'})
//* db.people.find({status: 'A'}).sort({user_id: 1})

// 14- SELECT * FROM people WHERE status = 'A' ORDER BY user_id DESC
//* db.people.find({status: 'A'}).sort({user_id: 'desc'})
//* db.people.find({status: 'A'}).sort({user_id: -1})

// 15- SELECT COUNT(*) FROM people
//* db.people.countDocuments()
//* db.people.find().count()

// 16- SELECT COUNT(user_id) FROM people
//* db.coll.countDocuments({user_id: {$exists: true}})
//* db.coll.countDocuments({user_id: {$exists: 1}})
//* db.coll.find({user_id: {$exists: true}}).count()
//* db.coll.find({user_id: {$exists: 1}}).count()

// 17- SELECT COUNT(*) FROM people WHERE age < 30
//* db.coll.countDocuments({age: {$gt: 30}})
//* db.people.find({age: {gt: 30}}).count();

// 18- SELECT DISTINCT(status) FROM people
//* db.people.distinct('status')

// 19- SELECT * FROM people LIMIT 1
//* db.people.find().limit(1)

// 20- SELECT * FROM people LIMIT 5 SKIP 10
//* db.people.find().skip(10).limiy(5)

/* 21-
    CREATE TABLE people (
        id MEDIUMINT NOT NULL AUTO_INCREMENT,
        user_id Varchar(30),
        age Number,
        status char(1),
        PRIMARY KEY (id)
    )
*/
/* 
    db.createCollection("people")
    db.people.insertOne({
        user_id: "user123",
        age: 30,
        status: "A"
    })
*/
/*
    db.createCollection("people", {
        validator: {
            $jsonSchema: {
                bsonType: "object",
                required: ["user_id", "age", "status"],
                properties: {
                    user_id: { bsonType: "string" },
                    age: { bsonType: "int" },
                    status: { bsonType: "string", minLength: 1, maxLength: 1 }
                }
            }
        }
    })
*/

// 22- ALTER TABLE people ADD join_date DATETIME
//* db.people.updateMany({}, { $set: { join_date: null } })

// 23- DROP TABLE people
//* db.people.drop()

//^ Not: DROP, tüm veri ve yapıyı kalıcı olarak kaldırırken, DELETE veya remove() sadece belirli kayıtları (verileri) siler, yapıyı korur.
//! DROP komutu geri alınamaz (undo yapılamaz). Silinen veriler geri getirilemez.

// 24- INSERT INTO people(user_id, age, status) VALUES ('bcd001', 45, 'A')
//* db.people.insertOne(user_id: 'bcd001', age: 45, status: 'A'})

// 25- UPDATE people SET status = 'C' WHERE age 25
//* db.people.updateMany({ age: {$gt: 25} }, { $set: { status: 'C' } })

// 26- UPDATE people SET age = age + 3 WHERE status = 'A'
//^ db.people.updateMany({ status: 'A' }, { $set: { age: age + 3 } }) -> !! hatali !!
//! age + 3 doğrudan kullanılmaz çünkü MongoDB bunu değişken olarak anlamaz.
//* db.people.updateMany({ status: 'A' },{ $inc: { age: 3 } })
//* db.people.updateMany({ status: 'A' },[{ $set: { age: { $add: ["$age", 3] } } }])

// 27- DELETE FROM people WHERE status = 'D'
//* db.people.deleteMany({ status: 'D'})

// 28- DELETE FROM people
//* db.people.deleteMany({});



// mongodb kodlari
//! https://www.mongodb.com/docs/manual/reference/sql-comparison/#further-reading 

/* Hazir data
    db.createCollection("people")
    db.people.insertMany([
        { user_id: 'user1', status: 'A', age: 21 },
        { user_id: 'user2', status: 'B', age: 22 },
        { user_id: 'user3', status: 'C', age: 23 },
        { user_id: 'user4', status: 'A', age: 24 },
        { user_id: 'user5', status: 'B', age: 25 },
        { user_id: 'user6', status: 'C', age: 26 },
        { user_id: 'user7', status: 'A', age: 27 },
        { user_id: 'user8', status: 'B', age: 28 },
        { user_id: 'user9', status: 'C', age: 29 },
        { user_id: 'user10', status: 'A', age: 30 },
        { user_id: 'user11', status: 'B', age: 31 },
        { user_id: 'user12', status: 'C', age: 32 },
        { user_id: 'user13', status: 'A', age: 33 },
        { user_id: 'user14', status: 'B', age: 34 },
        { user_id: 'user15', status: 'C', age: 35 },
        { user_id: 'user16', status: 'A', age: 36 },
        { user_id: 'user17', status: 'B', age: 37 },
        { user_id: 'user18', status: 'C', age: 38 },
        { user_id: 'user19', status: 'A', age: 39 },
        { user_id: 'user20', status: 'B', age: 40 },
        { user_id: 'user21', status: 'C', age: 41 },
        { user_id: 'user22', status: 'A', age: 42 },
        { user_id: 'user23', status: 'B', age: 43 },
        { user_id: 'user24', status: 'C', age: 44 },
        { user_id: 'user25', status: 'A', age: 45 },
        { user_id: 'user26', status: 'B', age: 46 },
        { user_id: 'user27', status: 'C', age: 47 },
        { user_id: 'user28', status: 'A', age: 48 },
        { user_id: 'user29', status: 'B', age: 49 },
        { user_id: 'user30', status: 'C', age: 50 }
        ]);
*/