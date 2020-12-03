-- insert INTO "interest" values
--
-- (1,'muziek'),
-- (2,'strand'),
-- (3,'avontuur'),
-- (4,'dieren'),
-- (5,'shopping'),
-- (6,'sporten'),
-- (7,'wintersport'),
-- (8,'lezen'),
-- (9,'museum');


-- insert users


-- insert into "user" values (1000,true,CURRENT_DATE, 'lawrancebahem@gmail.com', 'lawrance', 0, 'Bahem', 'admin', '/assets/Images/picProfile.png');
-- INSERT INTO "user"  VALUES (1052, false, '1999-05-04', 'tico@gmail.com', 'Tico', 0, 'Vermeer', 'admin', '/assets/Images/picProfile.png');
-- INSERT INTO "user"  VALUES (1002, true, '2020-12-02', 'lawrance@gmail.com', 'Lawrance', 0, 'bahem', 'admin', '/assets/Images/picProfile.png');

-- --
-- --
--
/**
  Insert user_interest
 */
-- INSERT INTO user_interest  VALUES (1002, 3);
-- INSERT INTO user_interest  VALUES (1002, 6);
-- INSERT INTO user_interest VALUES (1002, 7);
-- INSERT INTO user_interest  VALUES (1052, 1);
-- INSERT INTO user_interest  VALUES (1052, 6);
-- INSERT INTO user_interest  VALUES (1052, 7);


/**
  Insert activities
 */
-- INSERT INTO public.activity  VALUES (1, 'Wandelen in mooiste natuurgebieden van Nederland.', '../fall%20background.jpg', 'overal', 'Herfst');
-- INSERT INTO public.activity  VALUES (2, 'Gezellig fietsen met uw vriendin door de mooiste fietsroutes van Nederland met onze begeleiders.', 'fietsen.jpg', 'overal', 'Fietsen');
-- INSERT INTO public.activity VALUES (3, 'Zin om lekker je heupen te schudden? Er zijn genoeg discos in Nederland', 'bowlen.jpg', 'overal', 'Disco');
-- INSERT INTO public.activity  VALUES (4, 'Geen zin om naar buiten te gaan? Er zijn genoeg activiteiten die je thuis kan doen', 'mondkapjes.jpg', 'overal', 'Binnen');

select * from "interest";
