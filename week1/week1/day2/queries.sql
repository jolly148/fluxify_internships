 
user@DESKTOP-5NB3R5M c:\xampp
# mysql -u root -p
Enter password:
Welcome to the MariaDB monitor.  Commands end with ; or \g.
Your MariaDB connection id is 8
Server version: 10.4.32-MariaDB mariadb.org binary distribution

Copyright (c) 2000, 2018, Oracle, MariaDB Corporation Ab and others.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

MariaDB [(none)]> create database slms;
Query OK, 1 row affected (0.007 sec)

MariaDB [(none)]> use slms;
Database changed
MariaDB [slms]> create table book(book_id int auto_increment primary key,title varchar() not null,author varchar(),published_year int,available boolean default true);
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near ') not null,author varchar(),published_year int,available boolean default true)' at line 1
MariaDB [slms]> -- Books table
MariaDB [slms]> CREATE TABLE Book (
    ->   book_id INT AUTO_INCREMENT PRIMARY KEY,
    ->   title VARCHAR(255) NOT NULL,
    ->   author VARCHAR(255),
    ->   published_year INT,
    ->   available BOOLEAN DEFAULT TRUE
    -> );
Query OK, 0 rows affected (0.179 sec)

MariaDB [slms]>
MariaDB [slms]> -- Members table
MariaDB [slms]> CREATE TABLE Member (
    ->   member_id INT AUTO_INCREMENT PRIMARY KEY,
    ->   name VARCHAR(255) NOT NULL,
    ->   email VARCHAR(255) UNIQUE NOT NULL,
    ->   password VARCHAR(255) NOT NULL, -- will store encrypted password
    ->   join_date DATE DEFAULT CURRENT_DATE
    -> );
Query OK, 0 rows affected (0.212 sec)

MariaDB [slms]>
MariaDB [slms]> -- BorrowRecords table
MariaDB [slms]> CREATE TABLE BorrowRecord (
    ->   record_id INT AUTO_INCREMENT PRIMARY KEY,
    ->   member_id INT,
    ->   book_id INT,
    ->   borrow_date DATE NOT NULL,
    ->   return_date DATE,
    ->   FOREIGN KEY (member_id) REFERENCES Member(member_id),
    ->   FOREIGN KEY (book_id) REFERENCES Book(book_id)
    -> );
Query OK, 0 rows affected (0.254 sec)

MariaDB [slms]>
MariaDB [slms]> -- Payments table
MariaDB [slms]> CREATE TABLE Payment (
    ->   payment_id INT AUTO_INCREMENT PRIMARY KEY,
    ->   record_id INT UNIQUE,
    ->   amount DECIMAL(10,2) NOT NULL,
    ->   payment_date DATE DEFAULT CURRENT_DATE,
    ->   FOREIGN KEY (record_id) REFERENCES BorrowRecord(record_id)
    -> );
Query OK, 0 rows affected (0.234 sec)

MariaDB [slms]> desc Book;
+----------------+--------------+------+-----+---------+----------------+
| Field          | Type         | Null | Key | Default | Extra          |
+----------------+--------------+------+-----+---------+----------------+
| book_id        | int(11)      | NO   | PRI | NULL    | auto_increment |
| title          | varchar(255) | NO   |     | NULL    |                |
| author         | varchar(255) | YES  |     | NULL    |                |
| published_year | int(11)      | YES  |     | NULL    |                |
| available      | tinyint(1)   | YES  |     | 1       |                |
+----------------+--------------+------+-----+---------+----------------+
5 rows in set (0.022 sec)

MariaDB [slms]> desc payment;
+--------------+---------------+------+-----+-----------+----------------+
| Field        | Type          | Null | Key | Default   | Extra          |
+--------------+---------------+------+-----+-----------+----------------+
| payment_id   | int(11)       | NO   | PRI | NULL      | auto_increment |
| record_id    | int(11)       | YES  | UNI | NULL      |                |
| amount       | decimal(10,2) | NO   |     | NULL      |                |
| payment_date | date          | YES  |     | curdate() |                |
+--------------+---------------+------+-----+-----------+----------------+
4 rows in set (0.379 sec)

MariaDB [slms]> INSERT INTO Book (title, author, published_year) VALUES
    -> ('Clean Code', 'Robert C. Martin', 2008),
    -> ('The Pragmatic Programmer', 'Andrew Hunt', 1999),
    -> ('JavaScript: The Good Parts', 'Douglas Crockford', 2008);
Query OK, 3 rows affected (0.273 sec)
Records: 3  Duplicates: 0  Warnings: 0

MariaDB [slms]>
MariaDB [slms]> INSERT INTO Member (name, email, password) VALUES
    -> ('Alice', 'alice@example.com', 'encrypted_pw1'),
    -> ('Bob', 'bob@example.com', 'encrypted_pw2');
Query OK, 2 rows affected (0.109 sec)
Records: 2  Duplicates: 0  Warnings: 0

MariaDB [slms]> select*from member;
+-----------+-------+-------------------+---------------+------------+
| member_id | name  | email             | password      | join_date  |
+-----------+-------+-------------------+---------------+------------+
|         1 | Alice | alice@example.com | encrypted_pw1 | 2026-03-31 |
|         2 | Bob   | bob@example.com   | encrypted_pw2 | 2026-03-31 |
+-----------+-------+-------------------+---------------+------------+
2 rows in set (0.000 sec)

MariaDB [slms]> select*from Book;
+---------+----------------------------+-------------------+----------------+-----------+
| book_id | title                      | author            | published_year | available |
+---------+----------------------------+-------------------+----------------+-----------+
|       1 | Clean Code                 | Robert C. Martin  |           2008 |         1 |
|       2 | The Pragmatic Programmer   | Andrew Hunt       |           1999 |         1 |
|       3 | JavaScript: The Good Parts | Douglas Crockford |           2008 |         1 |
+---------+----------------------------+-------------------+----------------+-----------+
3 rows in set (0.001 sec)

MariaDB [slms]> SELECT Member.name, Book.title, BorrowRecord.borrow_date
    -> FROM BorrowRecord
    -> INNER JOIN Member ON BorrowRecord.member_id = Member.member_id
    -> INNER JOIN Book ON BorrowRecord.book_id = Book.book_id;
Empty set (0.003 sec)

MariaDB [slms]> UPDATE Book SET available = FALSE WHERE book_id = 1;
Query OK, 1 row affected (0.071 sec)
Rows matched: 1  Changed: 1  Warnings: 0

MariaDB [slms]> DELETE FROM Member WHERE member_id = 2;
Query OK, 1 row affected (0.077 sec)

MariaDB [slms]> SELECT * FROM Book
    -> WHERE published_year > 2000
    -> ORDER BY published_year DESC
    -> LIMIT 5;
+---------+----------------------------+-------------------+----------------+-----------+
| book_id | title                      | author            | published_year | available |
+---------+----------------------------+-------------------+----------------+-----------+
|       1 | Clean Code                 | Robert C. Martin  |           2008 |         0 |
|       3 | JavaScript: The Good Parts | Douglas Crockford |           2008 |         1 |
+---------+----------------------------+-------------------+----------------+-----------+
2 rows in set (0.001 sec)

MariaDB [slms]>



