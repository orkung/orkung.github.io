---
title: "Kafka Notları"
layout: post
---
[Kafka Dokumanindan notlar](https://kafka.apache.org/090/documentation.html)
kafka is a distributed, partitioned, replicated commit log service. it provides
the functionality of a messaging system, but with a unique design.

- kafka maintains feed of messages in categories called `topics`
- we'll call processes that publish messages to a kafka topic `producers`
- we'll call processes that subscribe to topics and process the feed of
  published messages `consumers`

- kafka is run as a cluster comprised of one or more servers each of which is
  called a `broker`

kafka mesaj feed'lerini `topic` adindaki kategorilerde tutar.
mesajlarin bir kafka topic'ine yayinlanasi `producer`'larla saglanir.
topic'lere abone olan ve topic'lere yayinlanan mesajlari isleyen servislere
`consumer` denir.
kafka'nin cluster halde birden cok server olarak calismasina `broker` denir.

So, at a high level, producers send messages over the network to the Kafka
cluster which in turn serves them up to consumers like this;

![Kafka_1](/assets/img/producer_consumer.png)

A `topic` is a category or a feed name to which messages are published.

The messages in the partitions are each assigned a sequental id number called the
`offset` that uniquely identifies each message within the partition.

kafka cluster retains all published messages -whether or not they have been
consumed- for a configurable period of time.

in fact the only metadata retained on a per-consumer basis is the position of
the consumer log, called the "offset".

this combination of features means that kafka consumers are very cheap-- they
can come and go without much impact on the cluster or on the other consumers.

[//]: # ofset'i henuz tanimlayamadim
[//]: # C:\Users\Kafein\Documents\is\files\docs_works\defect_acma

#### Distribution

the partitions of the log are distributed over the servers in the kafka cluster
with each server handling data and requests for a share of the paritions. Each
parititon is replicated across a configurable number of servers for fault
tolerance.
Each partition has one server which act as "leader" and zero or more servers
which act as "followers". the leader handles all read and write requests for
partition while the followers passively replicate the leader.
each servers act as leader for someo of its partitions and a follower for
others so load is well balanced within the cluster.

#### Producers
producer publish data to topics of their choice. the producer is responsible of
choosing which to assign to which partition within the topic. In other
publish/subscribe systems, these may be called -publishers- or -writers-.

#### Consumers
messaging tradionally has two models; queuing and publish-subscribe
in a queu; a pool of consumers may read from a server and each message goes to
one of them; in publish-subscribe the message is broadcast to all consumers.
Kafka offers a single consumer abstraction that generalizes both of these. --
the consumer group.

consumer label themselves with a consumer group name, and each message
published to a topic is delivered to one consumer instance within each
subscribing consumer group. Consumer instances can be in seperate processes or
on seperate machines.

Consumers read messages. In other publish/subscribe systems, these clients may
be called -subscribers- or -readers-

#### Broker
Kafka brokers are designed to operate as part of a -cluster-. Within a cluster
of brokers, one broker will also function as the cluster -controller- (elected
automatically from the live members of the cluster). The controller is
responsible for administrative operations, including assigning partitions to
brokers and monitoring for broker failures. A partition is owned by a single
broker in the cluster, and that broker called the -leader- of the partition. A
partition may be assigned to multiple brokers, which will result in the
partition being replicated (as seen in Figure 1-7). This provides redundancy of
messages in the partition, such that another broker can take over leadership if
there is a broker failure.

[//]: # export ZK="172.20.0.3:2181"
[//]: # /opt/kafka/bin/kafka-topics.sh --zookeeper $ZK --list
[//]: # export ZK="172.20.0.3:2181"
[//]: # export HOST_IP="172.30.203.71"
[//]: # $KAFKA_HOME/bin/kafka-topics.sh --create --topic topic --partitions 4 --zookeeper $ZK --replication-factor 1
[//]: # $KAFKA_HOME/bin/kafka-topics.sh --describe --topic topic --zookeeper $ZK
[//]: # $KAFKA_HOME/bin/kafka-console-producer.sh --topic=topic --broker-list=`broker-list.sh`
[//]: # export ZK="172.20.0.3:2181"
[//]: # $KAFKA_HOME/bin/kafka-console-consumer.sh --topic=topic --bootstrap-server 172.20.0.2:9092
[//]: # https://rmoff.net/2018/08/02/kafka-listeners-explained/
[//]: # https://www.confluent.io/blog/kafka-client-cannot-connect-to-broker-on-aws-on-docker-etc/
[//]: # kafka-run-class.sh kafka.tools.GetOffsetShell --broker-list localhost:9092 --topic topic-name

[ayaga_kaldirma](https://wurstmeister.github.io/kafka-docker)

### Kafka: The Definitive Guide Notes (Oreilly book)
-Publish/subscribe messaging- is a pattern that is characterized by the sender
(publisher) of a piece of data (message) not specifically directing it to a
receiver (subscriber) subscribes to receive certain classes of  messages.

Kafka often described as a "distributed commit log" or more recently as a
"distributing streaming platform."

the unit of data within Kafka is called a -message-.
the term -stream- is often used when discussing data within systems like Kafka.
Most often, a stream is considered to be a single topic of data

the replication mechanisms within the Kafka clusters are designed only to work
wihin a single cluster, not between multiple clusters.

Kafka producers: Writing messages to Kafka.
you will always use Kafka by writing a producer that writes data to kafka, a
consumer that reads data from kafka, or an application that servers both roles.
a producer object can be used by multiple threads to send messages.

#### Partitions

kafka messages are key-value pairs and while it's possible to create a
ProducerRecord with just a topic and a value, with the key set to null by
default, most applications produce records with keys. Keys serve two goals:

- they are additional information that gets stored with the message
- they are also used to decide which one of the topic partitions the message
  will be written to. All messages with the same key will go to the same
  partition. This means that if a process is reading only a subset of the
  partitions in a topic, all records for a single key will be ready by the same
  process.

#### Consumer Concepts

kafka consumers are typically part of a consumer group. the main way we scale
data consumption from a kafka topic is by adding more consumers to a group.
this is a good reason to create topics with a large number of partitions --it
allows adding more consumers when the load increases.

#### ZooKeeper is used for

- controller election
- cluster membership
- topic configuration
- access control
- lists, and quotas.

Kafka utilizes ZooKeeper for storing metadata information about the brokers,
topics and partitions. Writes to ZooKeeper are only performed on changes to the
members of consumer groups or on changes to Kafka cluster itself.

[//]: # https://dattell.com/data-architecture-blog/what-is-zookeeper-how-does-it-support-kafka/#:~:text=ZooKeeper%20is%20used%20in%20distributed,of%20Kafka%20topics%20and%20messages.
[//]: # https://www.confluent.io/blog/kafka-client-cannot-connect-to-broker-on-aws-on-docker-etc/?utm_source=github&utm_medium=rmoff&utm_campaign=ty.community.con.rmoff-listeners&utm_term=rmoff-devx
[//]: # https://kafka.apache.org/quickstart

#### from udemy lesson

- kafka create single partition per topic default.
- ProducerConfig values
  - acks = 1

##### Hands-Free Kafka Replication: A Lesson in Operational Simplicity

every partition in a kafka topic has a write-ahed log where the messages are stored and every message has a unique offset that identifies its position in the partition's log.

every topic partition in kafka is replicated n times, where n is the replication factor of the topic.

#### Choosing Right Partition Count & Replication Factor (Apache Kafka)

- partitions count, replication factor
  - partitions per topic: (num of broker x2 if n<6)
