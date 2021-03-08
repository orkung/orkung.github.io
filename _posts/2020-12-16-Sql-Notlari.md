---
layout: post
title: "Sql Notlari"
---

Asagidaki notlari w3schools sql tutorial sayfasinda calisirken tuttum. Sitedeki
northwind sample database'i [bu repo](https://github.com/dalers/mywind.git)'dan mysql'e import edip calistim.

Some of The Most Important SQL Commands

`SELECT` - extracts data from a database

`UPDATE` - updates data in a database

`DELETE` - deletes data from a database

`INSERT INTO` - inserts new data into a database

`CREATE DATABASE` - creates a new database

`ALTER DATABASE` - modifies a database

`CREATE TABLE` - creates a new table

`ALTER TABLE` - modifies a table

`DROP TABLE` - deletes a table

`CREATE INDEX` - creates an index (search key)

`DROP INDEX` - deletes an index


#### Operators in the WHERE Clouse

`=` eual

`>` greater than

`<` less than

`>`= greater than or equal

`<`= less than or equal

`<>` not equal. (some versions of SQL may be `!=`)

`BETWEEN` between a certain range

`LIKE` search for a pattern

`IN` to specify multiple possible values for a column

`ORDER BY` several columns example;
customers tablosundan country'e ve customername'e gore `ORDER BY`
yaptigimizda, country'e gore siralama, ayni country'dekileri ise customername'e
gore siralamak icin kullanilir.

The customerid column is an auto-increment field and will be generated
automatically when a new record is inserted into the table


`update` syntax'ini kullanirken dikkat edilmesi gereken, asla ve asla where
clause'un unutulmamasi, eger unutursan butun tabloyu update edersin...


The following SQL statement selects all customers that are from the same countries as the suppliers:

Example
SELECT * FROM Customers
WHERE Country IN (SELECT Country FROM Suppliers);

* sutunda birden cok data'yi cekmek icin where clause'da ```IN``` kullanilir.

```
select
    *
from
    tablo_adi
where
    sutun_adi IN (
        'deger_1',
        'deger_2',
    );
```
* Time'a gore sorguda hata alinirsa (string, float, integer birarda oldugunda)
  donusturulup sorgulanabilir;
  
```
select
    *
from
    tablo_adi
where
     TO_CHAR(insert_time, 'DD-MM-YYYY') = '25-02-2021';
```
