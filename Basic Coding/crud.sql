create database crud_db;

use crud_db;

CREATE TABLE `user_review` (
  `id` int(11) NOT NULL auto_increment,
  `order_id` int(11),
  `product_id` int(11),
  `user_id` int(11),
  `rating` float CHECK (`rating` >= 1 AND `rating` <= 5)
  `review` varchar(100),
  created_at timestamp default current_timestamp,
  updated_at timestamp  ON UPDATE current_timestamp,
  PRIMARY KEY  (`id`),
  CONSTRAINT
);
