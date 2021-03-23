
DROP TABLE IF EXISTS `shifts`;
CREATE TABLE IF NOT EXISTS `shifts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `summary` longtext NOT NULL,
  `shift` longtext NOT NULL,
  `type` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL,
  `admin` varchar(255) NOT NULL,
  `status` varchar(100) NOT NULL,
  `created` varchar(60) NOT NULL,
  `status_updated` varchar(60) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
COMMIT;


DROP TABLE IF EXISTS `requests`;
CREATE TABLE IF NOT EXISTS `requests` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `volunteer` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `shift_id` int(11) NOT NULL,
  `approved` varchar(40) NOT NULL,
  `request_time` varchar(60) NOT NULL,
  `approval_time` varchar(60) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `shifts.id` (`shift_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


ALTER TABLE `requests`
  ADD CONSTRAINT `shifts.id` FOREIGN KEY (`shift_id`) REFERENCES `shifts` (`id`);
COMMIT;
