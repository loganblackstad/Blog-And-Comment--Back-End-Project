--
-- PostgreSQL database dump
--

-- Dumped from database version 12.3
-- Dumped by pg_dump version 12.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Comments; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Comments" (
    id integer NOT NULL,
    author character varying(255) NOT NULL,
    remark character varying(255) NOT NULL,
    date_posted timestamp with time zone,
    post_id integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Comments" OWNER TO postgres;

--
-- Name: Comments_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Comments_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Comments_id_seq" OWNER TO postgres;

--
-- Name: Comments_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Comments_id_seq" OWNED BY public."Comments".id;


--
-- Name: Posts; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Posts" (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    author character varying(255) NOT NULL,
    date_posted timestamp with time zone,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Posts" OWNER TO postgres;

--
-- Name: Posts_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Posts_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Posts_id_seq" OWNER TO postgres;

--
-- Name: Posts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Posts_id_seq" OWNED BY public."Posts".id;


--
-- Name: SequelizeMeta; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."SequelizeMeta" (
    name character varying(255) NOT NULL
);


ALTER TABLE public."SequelizeMeta" OWNER TO postgres;

--
-- Name: Users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Users" (
    id integer NOT NULL,
    username character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    last_login timestamp with time zone,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Users" OWNER TO postgres;

--
-- Name: Users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Users_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Users_id_seq" OWNER TO postgres;

--
-- Name: Users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Users_id_seq" OWNED BY public."Users".id;


--
-- Name: Comments id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Comments" ALTER COLUMN id SET DEFAULT nextval('public."Comments_id_seq"'::regclass);


--
-- Name: Posts id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Posts" ALTER COLUMN id SET DEFAULT nextval('public."Posts_id_seq"'::regclass);


--
-- Name: Users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Users" ALTER COLUMN id SET DEFAULT nextval('public."Users_id_seq"'::regclass);


--
-- Data for Name: Comments; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Comments" (id, author, remark, date_posted, post_id, "createdAt", "updatedAt") FROM stdin;
1	john_doe_3	This is the Shizz!	2020-05-29 09:38:44.017-04	\N	2020-05-29 09:38:44.017-04	2020-05-29 09:38:44.017-04
2	kelsey-the-coder	Coding my socks Off!	2020-05-29 09:38:44.017-04	\N	2020-05-29 09:38:44.017-04	2020-05-29 09:38:44.017-04
3	john_doe_3	We're gonna Sequelize this B	2020-05-29 09:38:44.017-04	\N	2020-05-29 09:38:44.017-04	2020-05-29 09:38:44.017-04
\.


--
-- Data for Name: Posts; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Posts" (id, title, author, date_posted, "createdAt", "updatedAt") FROM stdin;
1	This is Easy!	Princeton92	\N	2020-05-29 09:38:44.036-04	2020-05-29 09:38:44.036-04
2	Sequelize is Going to Kill Me!	logan-yeah	\N	2020-05-29 09:38:44.036-04	2020-05-29 09:38:44.036-04
3	Let's Pump Up the Volume!	kelsey-the-coder	\N	2020-05-29 09:38:44.036-04	2020-05-29 09:38:44.036-04
\.


--
-- Data for Name: SequelizeMeta; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."SequelizeMeta" (name) FROM stdin;
20200528175023-create-users.js
20200528175400-create-posts.js
20200528175450-create-comments.js
\.


--
-- Data for Name: Users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Users" (id, username, email, password, last_login, "createdAt", "updatedAt") FROM stdin;
1	john_doe_3	therealjohndoe@gmail.com	password	2020-05-29 09:38:44.05-04	2020-05-29 09:38:44.05-04	2020-05-29 09:38:44.05-04
2	jane_doe_5	therealjanedoe@gmail.com	12345678	2020-05-29 09:38:44.051-04	2020-05-29 09:38:44.051-04	2020-05-29 09:38:44.051-04
3	logan-yeah	logan@gmail.com	password	2020-05-29 09:38:44.051-04	2020-05-29 09:38:44.051-04	2020-05-29 09:38:44.051-04
4	Princeton92	princeton@gmail.com	password	2020-05-29 09:38:44.051-04	2020-05-29 09:38:44.051-04	2020-05-29 09:38:44.051-04
5	kelsey-the-coder	kelsey@gmail.com	password	2020-05-29 09:38:44.051-04	2020-05-29 09:38:44.051-04	2020-05-29 09:38:44.051-04
\.


--
-- Name: Comments_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Comments_id_seq"', 3, true);


--
-- Name: Posts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Posts_id_seq"', 3, true);


--
-- Name: Users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Users_id_seq"', 5, true);


--
-- Name: Comments Comments_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Comments"
    ADD CONSTRAINT "Comments_pkey" PRIMARY KEY (id);


--
-- Name: Posts Posts_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Posts"
    ADD CONSTRAINT "Posts_pkey" PRIMARY KEY (id);


--
-- Name: Posts Posts_title_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Posts"
    ADD CONSTRAINT "Posts_title_key" UNIQUE (title);


--
-- Name: SequelizeMeta SequelizeMeta_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);


--
-- Name: Users Users_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key" UNIQUE (email);


--
-- Name: Users Users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_pkey" PRIMARY KEY (id);


--
-- Name: Users Users_username_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_username_key" UNIQUE (username);


--
-- PostgreSQL database dump complete
--

