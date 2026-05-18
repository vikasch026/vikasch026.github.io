# TCP: The Reliable One (He's a Bit Obsessive)

If networking was a cocktail party, TCP would be the guy who checks his watch every five seconds, asks you if you're listening, and makes you repeat back everything he just said. He's a bit of a control freak, but you want him in charge when you're sending your bank password across the internet.

TCP (Transmission Control Protocol) is the "reliable" one. In networking, "reliable" doesn't mean "it always works." It means "if it doesn't work, we'll keep trying until it does, and we'll tell you if it failed."

### The Three-Way Handshake (The Secret Handshake)

Before TCP even sends a single byte of your data, it has to establish a connection. This is the famous **Three-Way Handshake**. It's basically two computers making sure they're both ready to talk.

It goes like this:

1.  **SYN:** "Hey, I want to synchronize with you. My starting number is 100."
2.  **SYN-ACK:** "Got it! I acknowledge your 100. I also want to synchronize. My starting number is 5000."
3.  **ACK:** "Got it! I acknowledge your 5000. Let's talk."

Why the numbers? Those are **Sequence Numbers**. They're how TCP keeps track of everything. If you send a thousand bytes, they're numbered. If byte #452 goes missing, TCP knows exactly which one to ask for again.

### The Problem with the Real World

The internet is a messy place. Cables get cut, routers get overloaded, and packets get lost. TCP handles this by being paranoid.

#### Flow Control: The Sliding Window

Imagine you're trying to pour water (data) into a bucket (the receiver). If you pour too fast, the bucket overflows. TCP uses "Flow Control" to prevent this.

The receiver tells the sender: "Hey, I can only handle 1000 bytes at a time." This is called the **Window Size**. As the receiver processes the data, it slides that window along, letting the sender know it can send more.

#### Congestion Control: The "Traffic Jam" Sensor

If the routers between you and the server are getting slammed with traffic, they start dropping packets. TCP sees this and thinks, "Uh oh, the road is blocked. I should slow down."

It doesn't just keep blasting data into a bottleneck; it backs off and slowly speeds up again to find the maximum speed the network can handle.

### The Reliability Checklist

How does TCP actually _guarantee_ your data gets there?

1.  **Retransmissions:** If I send a packet and don't get an ACK (acknowledgment) back within a certain amount of time, I send it again. And again. And again.
2.  **Ordering:** If packets arrive out of order (which happens all the time!), TCP uses those sequence numbers to put them back together like a jigsaw puzzle before handing them to your app.
3.  **Checksums:** It looks at the data and says, "Does this match the checksum the sender sent?" If a bit flipped during the journey, it discards the packet and asks for a new one.

### Seeing TCP in Action

You can see all the active TCP connections on your machine right now. Open your terminal and type:

`ss -at` (or `netstat -an` on older systems/Windows)

You'll see a list of "ESTABLISHED" connections. Look at the local address and the foreign address. That's TCP doing its thing.

### When is TCP Overkill?

TCP is great, but it has a cost. All those handshakes, acknowledgments, and retransmissions take time and bandwidth.

If you're playing an online game and a packet with your character's position gets lost, you don't want TCP to stop everything, wait for a retransmission, and then finally show you where you were three seconds ago. You just want the _next_ packet with your _current_ position.

In that case, TCP is too slow. You need his wild, carefree cousin: UDP.

### Try This Exercise

1. Open your browser's developer tools (F12) and go to the "Network" tab.
2. Load a heavy website (like a news site).
3. Look at the "Waterfall" view. See how long it takes for the "initial connection" to happen? That's the Three-Way Handshake in action.
4. If you have a slow connection, you'll see those gaps get wider. That's TCP's congestion control trying to figure out how much data the wire can take.

### A Final Thought on TCP

TCP is the workhorse of the web. HTTP/1.1 and HTTP/2 both live on top of it. (Though HTTP/3 is a whole different story—we'll get there). It's the reason we can have a global network that actually works, even though it's built on top of unreliable hardware.

Next time you see a "Page Loading" spinner, just imagine those two computers doing their secret handshake and counting their sequence numbers. It's a miracle it works at all.

[Next: 09-udp-the-yolo-protocol.md]
