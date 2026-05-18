# A Brief History of the Internet (Or: How We Got Here)

Back in the late 1960s, computers were the size of a refrigerator and had about as much processing power as a modern-day toaster. There were only a handful of them in the world, and they were all owned by big universities or the US government.

If you wanted to use one, you had to physically go to the computer room, wait your turn, and hope it didn't catch fire.

The US Department of Defense (specifically ARPA, the Advanced Research Projects Agency) had a problem: they had all these expensive computers spread across the country, and they wanted a way for scientists to share information without having to travel across three states every time they had a new idea.

Thus, ARPANET was born. It was the first "real" network, and it changed everything.

## Circuit Switching vs. Packet Switching

To understand why the internet was so revolutionary, you have to understand how the old phone system worked.

The old phone system used **Circuit Switching**. If you wanted to call your grandma in Florida, the phone company would literally connect a series of physical wires all the way from your house to hers. For the duration of the call, those wires were yours and yours alone. No one else could use them.

If someone cut a wire in Georgia? The call was over. Too bad for you and your grandma.

ARPA wanted something better. They wanted a system that could survive a nuclear war (this was the Cold War, after all). They needed a network that was "self-healing." If one path was destroyed, the data should automatically find another way to its destination.

This is where **Packet Switching** comes in.

Imagine you have a big letter to send to a friend. Instead of putting it in one giant envelope, you cut the letter into tiny pieces. You put each piece in its own small envelope and number them (e.g., "1 of 50," "2 of 50"). You send them all individually.

Some envelopes might go through Georgia. Some might go through Alabama. One might even take a detour through Hawaii for some reason. If Georgia gets hit by a giant meteor, the rest of the envelopes just find a different route. Your friend at the other end gets all the pieces, sees the numbers, and puts the letter back together.

This is how the internet works. We take your data, chop it into "packets," and throw them into the digital abyss.

## The Big Four (1969)

In October 1969, the first message was sent between two computers: one at UCLA and one at Stanford.

The message was supposed to be "LOGIN."

They sent the "L." It worked.
They sent the "O." It worked.
They sent the "G." ...and the system crashed.

So the first message ever sent on the internet was "LO." It's incredibly fitting that the internet started with something that looks like a typo.

By the end of 1969, there were four nodes on the ARPANET. Today, there are billions.

## The Protocol War: TCP/IP vs. OSI

In the 70s and 80s, everyone was trying to build their own network. IBM had their own. Digital Equipment Corporation (DEC) had their own. It was a mess.

Two guys named Vint Cerf and Bob Kahn came up with a set of rules called **TCP/IP** (Transmission Control Protocol / Internet Protocol). It was simple, it was robust, and it worked on almost any kind of hardware.

Meanwhile, a big group of international experts was working on a "better" model called the **OSI Model** (Open Systems Interconnection). It was very academic, very thorough, and incredibly complicated.

The "Protocol War" was on. In one corner, you had the practical, "just make it work" TCP/IP. In the other, you had the "official" OSI model.

TCP/IP won. Why? Because it was already working, it was free, and developers actually liked it. The OSI model became a textbook reference (we still use its "layers" to talk about networking today), but TCP/IP is what actually runs the world.

## The Web is NOT the Internet

This is a common mistake. People use "internet" and "web" interchangeably, but they are very different things.

- **The Internet:** The physical infrastructure—the wires, the routers, the fiber optic cables. It's the "road" system.
- **The Web (World Wide Web):** A set of protocols and documents (HTML, HTTP) that live _on top_ of the internet. It's the "cars" driving on the roads.

Tim Berners-Lee invented the World Wide Web in 1989 while working at CERN. He wanted a better way for scientists to share documents with each other. He didn't invent the internet; he just gave us the most popular way to use it.

Before the web, we used the internet for things like email (SMTP), file transfers (FTP), and weird text-only discussion boards (USENET).

## The Modern Era: Billions of Nodes

In the 90s, the internet went commercial. We got dial-up modems (that screeching noise is burnt into a generation's brain), then broadband, then mobile data.

Today, we've moved from "computers talking to each other" to "everything talking to everything." Your fridge, your lightbulbs, your watch, and your doorbell are all nodes on the same global network that started with four refrigerator-sized computers in 1969.

## Why Does This History Matter?

Because many of the "weird" things about networking today are a direct result of how it was built.

- Why is the internet so insecure? Because it was built by a small group of scientists who all knew and trusted each other. They didn't think anyone would ever use it to steal credit card numbers.
- Why are we running out of IP addresses? Because the guys who designed IPv4 in the late 70s thought 4.3 billion addresses would be more than enough for the entire world. They were wrong.

## Try This: Tracing the Path

Open your terminal and type `traceroute google.com` (or `tracert google.com` if you're on Windows).

You'll see a list of every router your data hits on its way to Google. Each line is a "hop." You might see your local router, then your ISP's router, then a bunch of routers with names like "be123.cr4.nyc.isp.net."

You are literally watching packet switching in action. Your data is bouncing from node to node, just like the guys at ARPA intended.

In the next lesson, we're going to dive into the most important part of this whole system: how your computer actually has an "address" so the rest of the world knows where to send your cat pictures.

Next up: [04-ip-addresses-your-computers-home-address.md](04-ip-addresses-your-computers-home-address.md)
