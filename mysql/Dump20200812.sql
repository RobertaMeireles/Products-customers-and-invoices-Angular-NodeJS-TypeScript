-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: 192.168.99.100    Database: exercicios
-- ------------------------------------------------------
-- Server version	8.0.19

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categorias`
--

DROP TABLE IF EXISTS `categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categorias` (
  `id` int NOT NULL AUTO_INCREMENT,
  `designacao` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorias`
--

LOCK TABLES `categorias` WRITE;
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
INSERT INTO `categorias` VALUES (1,'Processadores'),(2,'Memorias'),(3,'Discos Rigidos'),(4,'Caixas'),(5,'Motherboards'),(6,'Monitores'),(7,'Perifericos'),(8,'Fontes de Alimentação'),(9,'Drives'),(10,'Placas Gráficas'),(11,'Placas de Som'),(12,'Rede'),(13,'Portáteis'),(14,'Tablets'),(15,'Smartphones');
/*!40000 ALTER TABLE `categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cidades`
--

DROP TABLE IF EXISTS `cidades`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cidades` (
  `cod_postal` int NOT NULL DEFAULT '0',
  `cidade` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`cod_postal`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cidades`
--

LOCK TABLES `cidades` WRITE;
/*!40000 ALTER TABLE `cidades` DISABLE KEYS */;
INSERT INTO `cidades` VALUES (1500,'Lisboa'),(2350,'Torres Novas'),(4000,'Porto'),(8500,'Portimão');
/*!40000 ALTER TABLE `cidades` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `clientes`
--

DROP TABLE IF EXISTS `clientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clientes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) DEFAULT NULL,
  `idade` int DEFAULT NULL,
  `morada` varchar(255) DEFAULT NULL,
  `cod_postal` int DEFAULT NULL,
  `deletado` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `cod_postal` (`cod_postal`),
  CONSTRAINT `CODPOSTALFK` FOREIGN KEY (`cod_postal`) REFERENCES `cidades` (`cod_postal`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clientes`
--

LOCK TABLES `clientes` WRITE;
/*!40000 ALTER TABLE `clientes` DISABLE KEYS */;
INSERT INTO `clientes` VALUES (1,'João Dias',34,'Rua de Cima',1500,0),(2,'Manuel Prazeres',42,'Rua de Baixo',2350,0),(3,'José Pereira',54,'Rua de Trás',1500,0),(4,'Maria Bonifácio',68,'Rua da Frente',4000,0),(5,'Helena Silva',53,'Rua da Escuridao',8500,0),(6,'Gostavo Balelas',24,'Rua da Claridade',2350,0),(7,'Vitor Fonseca',34,'Av. Grande',1500,0),(8,'Paulo Mariano',72,'Av. Pequena',1500,0),(10,'Zebedeu',60,'Travessa da Giesta',1500,0),(11,'Roberta',33,'Travessa da Giesta',1500,0),(12,'Alessandra',45,'Rua de Baixo',8500,1),(14,'Alessandra',45,'Rua de Baixo',8500,1),(15,'Jovelina Amaral',23,'Rua 4',1500,0);
/*!40000 ALTER TABLE `clientes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `facturas`
--

DROP TABLE IF EXISTS `facturas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `facturas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `data` datetime DEFAULT NULL,
  `id_cliente` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_cliente` (`id_cliente`),
  CONSTRAINT `CLIENTEFK` FOREIGN KEY (`id_cliente`) REFERENCES `clientes` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `facturas`
--

LOCK TABLES `facturas` WRITE;
/*!40000 ALTER TABLE `facturas` DISABLE KEYS */;
INSERT INTO `facturas` VALUES (1,'2012-07-06 11:40:32',1),(2,'2012-07-05 11:40:37',2),(3,'2012-07-11 11:41:48',3),(4,'2012-06-29 11:41:52',4),(5,'2012-05-09 11:41:57',5),(6,'2012-05-19 11:42:01',6),(7,'2012-07-26 11:42:06',7),(8,'2011-12-07 11:42:11',8),(9,'2011-12-08 12:00:00',8),(10,'2012-07-05 11:42:17',1),(11,'2012-07-01 11:42:36',2),(12,'2012-04-04 11:42:40',3),(13,'2012-07-11 11:42:52',4),(14,'2012-07-18 11:43:01',5),(15,'2012-03-08 11:42:56',6),(16,'2012-02-16 11:43:06',7),(17,'2012-07-15 11:41:43',8),(18,'2012-07-21 11:41:39',7),(19,'2012-07-12 11:41:35',6),(20,'2012-05-18 11:41:27',5),(21,'2012-07-01 11:41:22',4),(22,'2012-07-02 11:41:18',3),(23,'2012-07-04 11:41:14',2),(24,'2012-07-01 11:41:10',1),(25,'2020-06-21 15:45:01',2),(26,'2020-06-21 15:53:19',2),(27,'2020-08-04 20:16:05',1),(28,'2020-08-04 20:20:05',1),(29,'2020-08-04 21:12:11',1),(30,'2020-08-04 21:12:39',1),(31,'2020-08-04 21:12:46',1),(32,'2020-08-04 21:13:30',1),(34,'2020-08-11 20:38:34',2),(35,'2020-08-11 20:41:14',2),(36,'2020-08-11 20:42:47',2),(37,'2020-08-11 20:46:10',1),(38,'2020-08-11 20:50:22',2),(39,'2020-08-11 20:52:56',2),(40,'2020-08-11 22:18:31',5),(41,'2020-08-11 22:21:24',4),(42,'2020-08-11 22:26:50',3),(43,'2020-08-11 22:32:50',4),(44,'2020-08-11 22:34:46',6),(45,'2020-08-11 22:52:45',8),(46,'2020-08-11 23:00:09',5);
/*!40000 ALTER TABLE `facturas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `linhas_de_factura`
--

DROP TABLE IF EXISTS `linhas_de_factura`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `linhas_de_factura` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_factura` int DEFAULT NULL,
  `id_produto` int DEFAULT NULL,
  `quantidade` int DEFAULT NULL,
  `valor` float DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FACTURAFK` (`id_factura`),
  KEY `PRODUTOFK` (`id_produto`),
  CONSTRAINT `FACTURAFK` FOREIGN KEY (`id_factura`) REFERENCES `facturas` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `PRODUTOFK` FOREIGN KEY (`id_produto`) REFERENCES `produtos` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=450 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `linhas_de_factura`
--

LOCK TABLES `linhas_de_factura` WRITE;
/*!40000 ALTER TABLE `linhas_de_factura` DISABLE KEYS */;
INSERT INTO `linhas_de_factura` VALUES (124,1,31,7,NULL),(125,1,74,9,NULL),(126,1,41,2,NULL),(127,1,4,2,NULL),(128,1,8,7,NULL),(129,1,76,4,NULL),(130,1,67,4,NULL),(131,1,66,3,NULL),(132,1,12,5,NULL),(133,2,21,4,NULL),(134,2,29,5,NULL),(135,2,67,3,NULL),(136,3,10,2,NULL),(137,3,5,7,NULL),(138,4,73,2,NULL),(139,4,66,5,NULL),(140,4,44,3,NULL),(141,5,29,8,NULL),(142,5,22,9,NULL),(143,5,43,9,NULL),(144,5,10,10,NULL),(145,5,26,3,NULL),(146,5,27,10,NULL),(147,5,68,9,NULL),(148,5,9,5,NULL),(149,5,52,4,NULL),(150,5,6,8,NULL),(151,5,62,8,NULL),(152,5,66,10,NULL),(153,5,38,9,NULL),(154,5,15,8,NULL),(155,5,2,5,NULL),(156,5,5,10,NULL),(157,5,36,5,NULL),(158,5,35,5,NULL),(159,5,30,6,NULL),(160,5,44,3,NULL),(161,6,2,5,NULL),(162,6,47,4,NULL),(163,6,32,2,NULL),(164,6,13,6,NULL),(165,6,73,3,NULL),(166,7,39,8,NULL),(167,7,29,9,NULL),(168,7,3,2,NULL),(169,7,75,5,NULL),(170,7,13,6,NULL),(171,7,12,2,NULL),(172,7,10,1,NULL),(173,7,7,2,NULL),(174,7,45,4,NULL),(175,7,84,9,NULL),(176,7,6,1,NULL),(177,7,73,7,NULL),(178,7,78,9,NULL),(179,7,9,3,NULL),(180,7,38,3,NULL),(181,7,83,3,NULL),(182,7,43,3,NULL),(183,7,36,9,NULL),(184,7,44,1,NULL),(185,7,77,7,NULL),(186,7,46,8,NULL),(187,8,12,4,NULL),(188,8,51,9,NULL),(189,8,36,10,NULL),(190,8,46,4,NULL),(191,8,33,9,NULL),(192,8,77,7,NULL),(193,8,40,2,NULL),(194,8,38,10,NULL),(195,8,25,5,NULL),(196,8,83,8,NULL),(197,8,49,10,NULL),(198,8,14,2,NULL),(199,8,31,3,NULL),(200,8,66,9,NULL),(201,8,61,5,NULL),(202,8,81,1,NULL),(203,8,79,6,NULL),(204,8,70,3,NULL),(205,8,30,4,NULL),(206,8,58,6,NULL),(207,8,74,8,NULL),(208,8,42,3,NULL),(209,8,76,9,NULL),(210,8,55,8,NULL),(211,9,54,10,NULL),(212,9,21,9,NULL),(213,9,64,5,NULL),(214,9,69,1,NULL),(215,9,10,8,NULL),(216,9,52,6,NULL),(217,9,4,2,NULL),(218,9,16,1,NULL),(219,9,6,2,NULL),(220,9,61,6,NULL),(221,9,29,9,NULL),(222,9,22,1,NULL),(223,9,82,7,NULL),(224,9,43,9,NULL),(225,9,76,7,NULL),(226,9,12,8,NULL),(227,9,66,10,NULL),(228,9,79,1,NULL),(229,9,53,5,NULL),(230,10,1,10,NULL),(231,10,79,4,NULL),(232,10,74,8,NULL),(233,10,9,8,NULL),(234,11,73,5,NULL),(235,11,11,8,NULL),(236,11,64,7,NULL),(237,11,36,6,NULL),(238,11,44,2,NULL),(239,11,17,8,NULL),(240,11,1,9,NULL),(241,11,70,9,NULL),(242,11,30,6,NULL),(243,11,25,4,NULL),(244,11,56,5,NULL),(245,11,58,4,NULL),(246,11,61,2,NULL),(247,11,7,7,NULL),(248,11,35,2,NULL),(249,11,65,5,NULL),(250,11,6,1,NULL),(251,11,26,9,NULL),(252,11,69,6,NULL),(253,11,71,1,NULL),(254,11,41,4,NULL),(255,11,72,3,NULL),(256,11,2,3,NULL),(257,12,18,3,NULL),(258,12,38,5,NULL),(259,12,37,6,NULL),(260,12,66,4,NULL),(261,12,80,6,NULL),(262,12,21,2,NULL),(263,12,65,10,NULL),(264,12,75,5,NULL),(265,12,46,7,NULL),(266,13,27,10,NULL),(267,13,13,1,NULL),(268,13,62,3,NULL),(269,13,72,5,NULL),(270,13,34,9,NULL),(271,13,12,10,NULL),(272,13,55,5,NULL),(273,13,82,4,NULL),(274,13,9,4,NULL),(275,14,33,9,NULL),(276,14,53,10,NULL),(277,14,48,5,NULL),(278,14,58,1,NULL),(279,14,7,8,NULL),(280,14,51,4,NULL),(281,14,55,7,NULL),(282,14,77,8,NULL),(283,14,68,5,NULL),(284,14,54,5,NULL),(285,14,20,8,NULL),(286,15,7,7,NULL),(287,15,42,1,NULL),(288,15,83,4,NULL),(289,15,70,8,NULL),(290,15,40,10,NULL),(291,15,21,4,NULL),(292,15,43,9,NULL),(293,15,9,1,NULL),(294,15,30,9,NULL),(295,15,73,1,NULL),(296,15,16,9,NULL),(297,15,71,2,NULL),(298,15,75,6,NULL),(299,15,55,5,NULL),(300,15,77,9,NULL),(301,16,77,6,NULL),(302,16,59,8,NULL),(303,16,1,2,NULL),(304,16,76,10,NULL),(305,16,61,3,NULL),(306,16,6,2,NULL),(307,16,62,8,NULL),(308,16,73,9,NULL),(309,17,23,7,NULL),(310,17,70,10,NULL),(311,17,26,8,NULL),(312,17,43,3,NULL),(313,17,44,2,NULL),(314,17,59,3,NULL),(315,17,2,3,NULL),(316,17,20,1,NULL),(317,17,48,8,NULL),(318,17,61,2,NULL),(319,17,18,1,NULL),(320,17,36,10,NULL),(321,17,72,9,NULL),(322,17,39,5,NULL),(323,17,21,3,NULL),(324,17,16,1,NULL),(325,17,57,3,NULL),(326,17,38,3,NULL),(327,17,9,1,NULL),(328,17,30,8,NULL),(329,17,55,10,NULL),(330,17,41,6,NULL),(331,18,53,3,NULL),(332,18,75,7,NULL),(333,18,70,9,NULL),(334,18,36,6,NULL),(335,18,15,3,NULL),(336,18,29,5,NULL),(337,18,64,10,NULL),(338,18,23,2,NULL),(339,18,39,1,NULL),(340,18,21,2,NULL),(341,18,18,4,NULL),(342,19,42,1,NULL),(343,19,74,3,NULL),(344,19,51,6,NULL),(345,19,41,2,NULL),(346,19,83,3,NULL),(347,19,57,2,NULL),(348,19,54,7,NULL),(349,20,27,4,NULL),(350,20,7,5,NULL),(351,20,83,7,NULL),(352,20,57,4,NULL),(353,20,10,1,NULL),(354,20,5,10,NULL),(355,20,70,2,NULL),(356,20,34,1,NULL),(357,20,81,9,NULL),(358,20,52,2,NULL),(359,20,23,9,NULL),(360,20,51,4,NULL),(361,20,31,5,NULL),(362,20,35,2,NULL),(363,20,59,10,NULL),(364,20,68,5,NULL),(365,20,72,7,NULL),(366,20,20,6,NULL),(367,20,78,7,NULL),(368,20,33,3,NULL),(369,20,30,5,NULL),(370,20,1,4,NULL),(371,20,84,10,NULL),(372,21,58,6,NULL),(373,21,12,4,NULL),(374,21,22,9,NULL),(375,21,72,3,NULL),(376,21,67,4,NULL),(377,21,43,3,NULL),(378,21,70,3,NULL),(379,21,3,4,NULL),(380,21,34,2,NULL),(381,21,68,10,NULL),(382,22,28,7,NULL),(383,22,26,4,NULL),(384,22,58,3,NULL),(385,22,16,10,NULL),(386,22,14,9,NULL),(387,22,49,4,NULL),(388,22,73,6,NULL),(389,23,55,7,NULL),(390,23,38,3,NULL),(391,23,46,3,NULL),(392,23,76,1,NULL),(393,23,20,2,NULL),(394,23,58,1,NULL),(395,23,71,6,NULL),(396,23,52,1,NULL),(397,23,48,6,NULL),(398,23,10,7,NULL),(399,23,5,5,NULL),(400,23,57,1,NULL),(401,23,39,2,NULL),(402,23,16,8,NULL),(403,23,14,8,NULL),(404,23,6,3,NULL),(405,23,34,1,NULL),(406,23,18,6,NULL),(407,23,62,8,NULL),(408,23,35,1,NULL),(409,23,49,5,NULL),(410,23,47,7,NULL),(411,23,8,10,NULL),(412,23,12,10,NULL),(413,23,74,2,NULL),(414,24,7,4,NULL),(415,24,37,7,NULL),(416,24,80,2,NULL),(417,24,65,7,NULL),(418,24,10,9,NULL),(419,24,19,5,NULL),(420,24,68,6,NULL),(421,24,4,6,NULL),(422,24,40,9,NULL),(423,24,75,3,NULL),(424,24,61,5,NULL),(425,24,6,1,NULL),(426,24,58,3,NULL),(427,24,71,7,NULL),(428,24,55,4,NULL),(429,24,44,8,NULL),(430,25,2,1,964),(431,25,5,1,223.9),(432,25,6,1,175),(433,26,2,1,964),(434,26,5,1,223.9),(435,26,6,1,175),(436,28,1,5,50),(437,28,2,1,10),(438,28,3,2,20),(439,30,1,5,50),(440,30,2,1,10),(441,30,3,2,20),(442,31,1,5,50),(443,31,2,1,10),(444,31,3,2,20),(445,32,1,5,50),(446,32,2,1,10),(447,32,3,2,20),(448,45,23,1,72.5),(449,46,1,1,56.9);
/*!40000 ALTER TABLE `linhas_de_factura` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `produtos`
--

DROP TABLE IF EXISTS `produtos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `produtos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `designacao` varchar(100) DEFAULT NULL,
  `descricao` text,
  `preco` float DEFAULT NULL,
  `id_categoria` int DEFAULT NULL,
  `deletado` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_categoria` (`id_categoria`),
  CONSTRAINT `CATEGORIAFK` FOREIGN KEY (`id_categoria`) REFERENCES `categorias` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=95 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produtos`
--

LOCK TABLES `produtos` WRITE;
/*!40000 ALTER TABLE `produtos` DISABLE KEYS */;
INSERT INTO `produtos` VALUES (1,'AMD A4-3305','Nova geração de processadores AMD, dual core, gráfica integrada DirectX 11 e controlador de memória DDR3.',56.9,1,0),(2,'Intel Core i7 3960X','Processador Intel Extreme Edition, arquitectura inovadora em 32nm, Socket LGA-2011, Hexa Core, controlador de memória integrado, Hyper-Threading e 15MB de cache L3!',964,1,0),(3,'Intel Core i7 3930K	','Processador Intel com arquitectura inovadora em 32nm, Socket LGA-2011, Hexa Core, controlador de memória integrado, Hyper-Threading e 12MB de cache L3!',547.9,1,0),(4,'Intel Xeon E5-2620 ','Intel Xeon de arquitectura Sandy Bridge EP, 32nm, Socket LGA-2011 Six Core, controlador de memória integrado e 15MB de cache.',419,1,0),(5,'Intel Core i5 3570K','Processador Intel Ivy Bridge com arquitectura inovadora em 22nm, Socket LGA-1155, Quad Core, controlador de memória integrado e 6MB de cache L3! Versão K permite overclock.',223.9,1,0),(6,'AMD FX-8120 Black Edition ','Nova geração de processadores AMD, oito núcleos de processamento (hexa-core), tecnologia AMD TurboCore e 8MB de cache L3.',175,1,0),(7,'Intel Core i3 2130 \n','Nova geração da Intel, arquitectura inovadora (Sandy Bridge) em 32nm, Socket LGA-1155, Dual Core e controlador de memória integrado.',132.9,1,0),(8,'Gskill Ripjaws X DDR3-2133MHz 4x8GB ','Kit de memória de 32GB que funciona a DDR3 2133 Mhz. Com dissipadores activos e passivos de alta performance.',339,2,0),(9,'Gskill Ripjaws Z DDR3-1600MHz C7 4x4GB ','Kit de memória de 16GB que funciona a DDR3 1600 Mhz. Com dissipadores de alta performance.',156,2,0),(10,'Gskill Ripjaws Z DDR3-2133MHz 4x4GB ','Kit de memória de 16GB que funciona a DDR3 2133 Mhz. Com dissipadores de alta performance.',155,2,0),(11,'Corsair DDR3 Vengeance PC3-1600 8GB ','Kit de Memória DDR3 que funciona a 1600 Mhz a um excelente preço.',73.8,2,0),(12,'GeIL Evo Corsa DDR317000 8GB ','Kit de memória de 8GB que funciona a DDR3-2133 Mhz e com CAS 11. Com dissipadores passivos de alta performance.',55.9,2,0),(13,'Corsair 2.5\'\' SSD Force Series 3 120GB ','Chegaram os novos discos SSD de topo com o controlador SandForce, tempo de acesso praticalmente nulo (<.2 ms) e velocidade de leitura que pode chegar aos 550MB/S.',105.9,3,0),(14,'Disco Seagate 500GB 7200.12 ','Nova geração Seagate 7200.12 criada a pensar no ambiente e na máxima performance. Com Interface SATA 6.0G',79.9,3,0),(15,'Disco SSD Intel 330 120GB ','Novos discos SSD da Intel, com tempo de acesso praticalmente nulo (<.1 ms) e velocidade de leitura que pode chegar aos 500MB/S.',125.9,3,0),(16,'Hitachi 1TB SATA III ','Disco de 1TB da Hitachi, com 32MB de cache.',119,3,0),(17,'OCZ 2.5\'\' SSD Agility 3 360GB ','Chegaram os novos discos SSD, com tempo de acesso praticalmente nulo (<.1 ms) e velocidade de leitura que pode chegar aos 525MB/S.',317.5,3,0),(18,'Samsung 1TB SATA II ','Discos Spinpoint F3',99.9,3,0),(19,'Seagate Momentus XT 750GB 2.5 ','Disco rígido de 750GB 2.5\'\'\'\'\'\'\'\' que funciona a 7200rpm e tecnologia de memória hibrida.',145.9,3,0),(20,'Western Digital 1TB RE4 SATA 3Gb/s ','Disco rígido de 1TB da linha empresarial da WD.',135,3,0),(21,'Western Digital VelociRaptor 1TB 10.000rpm ','Nova versão do famoso Raptor agora com SATA 3 e 64MB de cache.',285,3,0),(22,'1Life c:clone 500W ','Caixa da 1Life de dimensões reduzidas com fonte de alimentação de 500W.',30.39,4,0),(23,'Aerocool Cyborg X','Excelente caixa da aerocool.',72.5,4,0),(24,'Aerocool X-Warrior Black	','Excelente caixa da aerocool.',52.9,4,0),(25,'Antec Dark Fleet DF-85 ','Caixa Antec com um design inovador e janela em acrilico.',155,4,0),(26,'Coolermaster CM690 II Advanced USB3.0 Black Window ','Versão melhorada desta fantástica caixa Coolermaster, agora com mais funcionalidades e um sistema de refrigeração melhorado.',109,4,0),(27,'Nox Live 2 ','Uma óptima solução de HTPC (Home-Theatre PC), muito elegante, com IMON LCD e controlo remoto.',113.9,4,0),(28,'Asus Z9PE-D8 WS ','Motherboard Asus para workstations que suporta dois processadores Intel Socket 2011.',479,5,0),(29,'MSI Big Bang-XPower II ','Nova motherboard com o novo chipset topo de gama (X79) para os processadores Intel Core i7 de segunda geração (Socket LGA2011), PCI-E 3.0 e que suporta até 128GB DDR3 Quad-Channel.',372,5,0),(30,'Asus Maximus IV Extreme-Z ','Board Asus para os novos processadores Intel Socket 1155 Sandy Bridge (Core i3/i5/i7), com USB 3.0 e SATA 3. A melhor board do mercado em matéria de overclock. Chipset Z68..',339,5,0),(31,'Asus P9X79 Deluxe ','Nova motherboard com o novo chipset topo de gama (X79) para os processadores Intel Core i7 de segunda geração (Socket LGA2011), PCI-E 3.0 e que suporta até 64GB DDR3 Quad-Channel.',339,5,0),(32,'Asus Rampage IV Formula ','Nova motherboard com o novo chipset topo de gama (X79) para os processadores Intel Core i7 de segunda geração (Socket LGA2011), PCI-E 3.0 e que suporta até 32GB DDR3 Quad-Channel. Incluí o jogo Battlefield 3.',318,5,0),(33,'Asrock X79 Extreme4 ','Board Asrock com o novo chipset X79 para os processadores Intel Socket 2011, incluí funcionalidades como SATA 3, USB 3.0 e PCI-E 3.0',199,5,0),(34,'MSI G41M-P28 ','Board MSI para os processadores Intel Socket 775.',43,5,0),(35,'Dell 30\'\' U3011 ','Monitor de 30 polegadas wide com resolução 2560 x 1600 e Painel IPS.',1028,6,0),(36,'Asus LCD 27\'\' VG278H ','Monitor de 27 polegadas, com resolução 1920 x 1080 (Full HD), 120Hz, com Kit Nvidia 3D Vision 2.',599,6,0),(37,'Dell 21.5\'\' ST2220T ','Monitor multi-touch da Dell com 21.5 polegadas wide com resolução Full HD (1920 x 1080) e painel IPS.',249,6,0),(38,'Asus LCD 18.5\' VW190DE ','Qualidade e perfeição num excelente monitor de 5ms a um excelente preço.',69,6,0),(39,'Rato Razer Mamba 4G ','Rato da Razer, com o sensor laser mais avançado do mercado (6400 DPI) e possibilidade de ser usado com ou sem fios.',123,7,0),(40,'Logitech G700 ','Nova geração de rato para gaming sem fios da Logitech com 5700 dpi.',62.9,7,0),(41,'Logitech MX Performance ','Rato Logitech sem fios com tecnologia laser que permite ser utilizado em qualquer superfície até vidro.',55.9,7,0),(42,'Logitech Cordless Desktop MX 5500 Laser ','O conjunto rato e teclado topo de gama da logitech.',145,7,0),(43,'Logitech Wireless Touch K400 ','Teclado Logitech com touchpad integrado.',35.01,7,0),(44,'Gigabyte GK-K6800 ','Teclado Gigabyte com um design super atractivo e com 14 teclas de atalho.',12,7,0),(45,'1Life Fonte JET 450W ','Fonte de Alimentação de 450W a um excelente preço.',16.9,8,0),(46,'Aerocool Strike-X 1100W ','Fonte de alimentação modular Aerocool 1100W com certificação 80Plus gold.',129,8,0),(47,'Fonte Corsair HX-650W Modular ','Fonte Corsair HX-650W Modular',115,8,0),(48,'Nox Fonte Urano 450W ','Fonte de alimentação de 450W!',29,8,0),(49,'Pioneer DVD-RW & BD-R BDR-206DBK ','Drive da Pioneer, funciona como gravador de DVD e Blu-Ray.\n',96,9,0),(50,'Plextor 24x DVD-RW PX-891SA Preto ','A melhor marca de gravadores está de volta com esta novidade. Grava a 24x.',25.01,9,0),(51,'Asus DVD-RW Slim Externo Branco ','Gravador Slim Externo que grava a 8x com suporte para Dual Layer.',33.6,9,0),(52,'Plexor BR-W','Gravador de Blueray',99,9,0),(53,'EVGA GTX690 4GB GDDR5 ','Gráfica topo de gama da NVidia com dois processadores gráfico Kepler.',999,10,0),(54,'EVGA GTX680 SC+ c/ Backplate 2GB GDDR5 ','Gráfica topo de gama da NVidia com o novo processador gráfico Kepler. Versão com overclock de fábrica.',517.6,10,0),(55,'EVGA GTX480 1536MB GDDR5 ','Gráfica NVidia com o novo processador gráfico Fermi, com suporte para DirectX 11, CUDA e uma capacidade de processamento espantosa.\n',250,10,0),(56,'MSI ATI R7870 Twin Frozr 2GB DDR5 \n','Nova geração da ATI, as melhores gráficas do mercado em relação preço/performance.',319,10,0),(57,'Asus ATI HD7750 V2 1GB DDR5 ','Nova geração da ATI, as melhores gráficas do mercado em relação preço/performance.',120,10,0),(58,'Asus GT 430 1GB DDR3 ','Placa gráfica com suporte DirectX 11 para orçamentos baixos com uma boa capacidade 3D.',55.5,10,0),(59,'Asus Xonar Essence One ','Conversor de áudio Hi-Fi digital para analógico com interface USB e amplificador de Headphone. Primeiro DAC do mundo com tecnologia de upsampling simétrico 8x.',399,11,0),(60,'Asus Xonar HDAV 1.3 ','Placa som 7.1 topo de gama da Asus, codificação em tempo real de DTS e Dolby Digital, sistema de melhoramento de imagem de videoa.',199,11,0),(61,'Creative Sound Blaster X-Fi Titanium HD ','Placa de Som X-Fi, versão Titanium HD e slot PCI Express. Ideal para audiófilos.',159,11,0),(62,'Asus Xonar DG ','Placa som 5.1 da Asus, excelente relação preço/qualidade.',27,11,0),(63,'Access Point TP-Link Wireless N TL-WA901ND ','Access Point da TP-Link com suporte para a nova norma wireless 802.11n e velocidades até 300Mbps.',50.9,12,0),(64,'Asus Placa de Rede 10/100/1000','Placa de Rede Gigabit 10/100/1000 Full Duplex',11,12,0),(65,'Asus Wireless N USB-N13 ','Adaptador USB2.0 Wireless da Asus com suporte para a nova norma wireless 802.11n.',19.9,12,0),(66,'Apple MacBook Pro 15\'\' Retina i7-2,6GHz | 8GB | 512GB SSD','Core i7-2,6GHz | 8GB | 512GB SSD | GeForce GT 650M | 15,4\'\'\nMC976PO/A',2979,13,0),(67,'Apple MacBook Pro 13\'\' Core i7 2,8GHz | 750GB','Core i7 2,8GHz | 4GB | 750GB | Intel HD 3000 | 13,3\'\'\nMD314PO/A',1199,13,0),(68,'Apple MacBook Air 13\'\' i5-1,8GHz | 8GB | SSD 128GB','Core i5-1,8GHz | 8GB | SSD 128GB | Intel HD 4000 | 13,3\'\'',1399,13,0),(69,'Asus G75VW-T1066V ','Ultima geração da Asus, agora já com processador Ivy Bridge, DirectX 11, norma Wireless 802.11n e USB 3.0.',1748.99,13,0),(70,'Asus Zenbook Prime UX31A-R4008V ','Ultrabook da Asus, com processador Ivy Bridge de baixa voltagem, disco SSD, USB 3.0, ecrã Full HD IPS, teclado retroiluminado e apenas 9mm de espessura.',1499,13,0),(71,'Apple iPad 3 4G 64GB Preto ','Tablet Apple com o novo ecrã Retina, câmara de 5MP, Bluetooth 4.0 e um fantástico processador gráfico.',799,14,0),(72,'Apple iPad 3 4G 32GB Preto ','Tablet Apple com o novo ecrã Retina, câmara de 5MP, Bluetooth 4.0 e um fantástico processador gráfico.',699,14,0),(73,'Apple iPad 3 4G 16GB Preto ','Tablet Apple com o novo ecrã Retina, câmara de 5MP, Bluetooth 4.0 e um fantástico processador gráfico.',599,14,0),(74,'Apple iPad 3 64GB Preto ','Tablet Apple com o novo ecrã Retina, câmara de 5MP, Bluetooth 4.0 e um fantástico processador gráfico.',679,14,0),(75,'Apple iPad 32GB Preto ','Tablet Apple com o novo ecrã Retina, câmara de 5MP, Bluetooth 4.0 e um fantástico processador gráfico.',579,14,0),(76,'Apple iPad 3 16GB Preto ','Tablet Apple com o novo ecrã Retina, câmara de 5MP, Bluetooth 4.0 e um fantástico processador gráfico.',479,14,0),(77,'Apple iPad 3 4G 64GB Branco ','Tablet Apple com o novo ecrã Retina, câmara de 5MP, Bluetooth 4.0 e um fantástico processador gráfico.',799,14,0),(78,'Apple iPad 3 4G 32GB Branco ','Tablet Apple com o novo ecrã Retina, câmara de 5MP, Bluetooth 4.0 e um fantástico processador gráfico.',699,14,0),(79,'Apple iPad 3 4G 16GB Branco','Tablet Apple com o novo ecrã Retina, câmara de 5MP, Bluetooth 4.0 e um fantástico processador gráfico.',599,14,0),(80,'Apple iPad 3 64GB Branco','Tablet Apple com o novo ecrã Retina, câmara de 5MP, Bluetooth 4.0 e um fantástico processador gráfico.',679,14,0),(81,'Apple iPad 3 32GB Branco','Tablet Apple com o novo ecrã Retina, câmara de 5MP, Bluetooth 4.0 e um fantástico processador gráfico.',579,14,0),(82,'Apple iPad 3 16GB Branco','Tablet Apple com o novo ecrã Retina, câmara de 5MP, Bluetooth 4.0 e um fantástico processador gráfico.',479,14,0),(83,'Asus EeePad Transformer Prime 32GB c/ dock Gold ','Tablet Asus que funciona em Android 3.2, com processador Nvidia Tegra 3 (Quad Core), Câmara 8MP, resolução de 1280 x 800 e apenas 8.3mm de espessura.',569,14,0),(84,'Samsung Galaxy Nexus ','Smartphone da Google, com o novo Android ICS 4.0, CPU Dual Core 1.2GHz, Câmara 5MP, Ecrã Super AMOLED HD e 16GB de armazenamento.',399,15,0),(85,'Samsung Galaxy Note Blue','Sistema operativo Android 2.3 (Actualizável para o ICS 4.0), CPU Dual Core 1.4GHz, Câmara 8MP, Ecrã Super AMOLED HD e 16GB de armazenamento.',499,15,0),(86,'Samsung Galaxy S III Azul ','Sistema operativo Android 4.0.4, CPU Quad Core 1.4GHz, Câmara 8MP, Ecrã Super AMOLED HD, 16GB de armazenamento, Bluetooth 4.0 e bateria de 2100mAh',635,15,0),(87,'Intel','Processador de 12 nucleos',580,1,0),(88,'Intel','Processador de 12 nucleos',580,1,0),(89,'Intel','Processador de 12 nucleos',580,1,0),(91,'Laptop','Laptop ultima geração',23,1,1),(92,'Mouse','Mouse Azul',10,1,1),(93,'Table','Table',100,1,1),(94,'Laptop','laptop Dell',500,1,0);
/*!40000 ALTER TABLE `produtos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `utilizadores`
--

DROP TABLE IF EXISTS `utilizadores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `utilizadores` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `nome` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `utilizadores`
--

LOCK TABLES `utilizadores` WRITE;
/*!40000 ALTER TABLE `utilizadores` DISABLE KEYS */;
INSERT INTO `utilizadores` VALUES (1,'roberta@roberta.com','5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5','Roberta'),(2,'hugo@hugo.com','5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5','Hugo'),(3,'roberto@roberto.com','5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5','Roberto Garcia'),(4,'taina@taina.com','5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5','Tainá');
/*!40000 ALTER TABLE `utilizadores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'exercicios'
--

--
-- Dumping routines for database 'exercicios'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-08-12 19:18:13
