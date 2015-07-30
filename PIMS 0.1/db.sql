-- phpMyAdmin SQL Dump
-- version 3.2.0.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Aug 09, 2014 at 05:32 AM
-- Server version: 5.1.37
-- PHP Version: 5.3.0

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

--
-- Database: `db`
--

-- --------------------------------------------------------

--
-- Table structure for table `filestore`
--

CREATE TABLE IF NOT EXISTS `filestore` (
  `fileId` int(100) NOT NULL,
  `fileName` varchar(50) NOT NULL,
  `filePath` varchar(50) NOT NULL
) ENGINE=MyISAM  DEFAULT CHARSET=latin1;

--
-- Dumping data for table `filestore`
--

INSERT INTO `filestore` (`fileId`, `fileName`, `filePath`) VALUES
(0, 'poem', 'file.txt'),
(0, 'poem', 'file.txt'),
(0, 'poem', 'file.txt');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `user_id` int(100) NOT NULL AUTO_INCREMENT,
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `levels` int(11) NOT NULL,
  `email` varchar(100) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=66 ;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `username`, `password`, `levels`, `email`) VALUES
(1, 'glitz', 'liz', 3, 'multiglitz@gmail.com'),
(2, 'jojo', 'joan', 2, 'multiglitz@gmail.com'),
(65, 'kjhb', 'uih', 2, 'multiglitz@gmail.com'),
(64, 'adokj', 'fad', 2, 'multiglitz@gmail.com');
