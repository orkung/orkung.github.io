---
title: "Kafka Notları"
layout: post
---
[Kafka Dokumanindan notlar](https://kafka.apache.org/090/documentation.html)
kafka is a distributed, partitioned, replicated commit log service. it provides
the functionality of a messaging system, but with a unique design.

* kafka maintains feed of messages in categories called `topics`
* we'll call processes that publish messages to a kafka topic `producers`
* we'll call processes that subscribe to topics and process the feed of
  published messages `consumers`

* kafka is run as a cluster comprised of one or more servers each of which is
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
choosing which to assign to which partition within the topic.

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

[ayaga_kaldirma](https://wurstmeister.github.io/kafka-docker)


ZooKeeper has five primary functions.  Specifically, ZooKeeper is used for
controller election, cluster membership, topic configuration, access control
lists, and quotas.
[//]: # https://dattell.com/data-architecture-blog/what-is-zookeeper-how-does-it-support-kafka/#:~:text=ZooKeeper%20is%20used%20in%20distributed,of%20Kafka%20topics%20and%20messages.
[//]: # https://www.confluent.io/blog/kafka-client-cannot-connect-to-broker-on-aws-on-docker-etc/?utm_source=github&utm_medium=rmoff&utm_campaign=ty.community.con.rmoff-listeners&utm_term=rmoff-devx
