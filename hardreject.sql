-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Дек 03 2019 г., 16:36
-- Версия сервера: 10.1.21-MariaDB
-- Версия PHP: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `hardreject`
--

-- --------------------------------------------------------

--
-- Структура таблицы `projects`
--

CREATE TABLE `projects` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `online` tinyint(1) NOT NULL DEFAULT '0',
  `example` varchar(100) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `projects`
--

INSERT INTO `projects` (`id`, `user_id`, `name`, `online`, `example`, `description`) VALUES
(1, 1, 'Создание презентации', 0, 'files/example.txt', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam autem voluptas, laborum. Dolores, ipsum, natus. Sit, soluta reiciendis nemo commodi exercitationem vel, modi suscipit in amet, voluptatum quibusdam laborum ullam.'),
(2, 1, 'Создание сайта', 0, '', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam autem voluptas, laborum. Dolores, ipsum, natus. Sit, soluta reiciendis nemo commodi exercitationem vel, modi suscipit in amet, voluptatum quibusdam laborum ullam.'),
(3, 2, 'Видеообработка', 0, '', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam autem voluptas, laborum. Dolores, ipsum, natus. Sit, soluta reiciendis nemo commodi exercitationem vel, modi suscipit in amet, voluptatum quibusdam laborum ullam.'),
(4, 1, 'Компьютерные сети', 0, '', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque vel, incidunt tempore asperiores quae, eligendi sint fuga aut. Asperiores dolor iste perspiciatis nemo mollitia similique quidem hic, pariatur debitis unde.');

-- --------------------------------------------------------

--
-- Структура таблицы `team`
--

CREATE TABLE `team` (
  `id` int(11) NOT NULL,
  `project_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `role` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `team`
--

INSERT INTO `team` (`id`, `project_id`, `user_id`, `role`) VALUES
(1, 1, 2, 'Текст-Презентация');

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(100) NOT NULL,
  `fio` varchar(100) NOT NULL,
  `pass` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `email`, `fio`, `pass`) VALUES
(1, 'example@mail.ru', 'Никонов Евгений Русланович', 'Abc123'),
(2, 'example2@mail.ru', 'Кушнер Олег Сергеевич', 'Abc123');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `team`
--
ALTER TABLE `team`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `projects`
--
ALTER TABLE `projects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT для таблицы `team`
--
ALTER TABLE `team`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
