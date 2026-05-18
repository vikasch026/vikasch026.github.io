# IP Addresses: Your Computer's Home Address

In the last lesson, we talked about how the internet is just a giant collection of packets flying around. But how does a packet know where to go?

Imagine you're sending a letter to your friend. You don't just write "To: Bob" on the envelope and throw it in a mailbox. The post office doesn't know who "Bob" is. There are millions of Bobs.

You need an address. You need a street, a house number, a city, a state, and a zip code.

In networking, that address is your **IP Address** (Internet Protocol address). It's the unique identifier that tells the rest of the world exactly where your computer is located on the global network.

## The IPv4 Address: Four Little Numbers

Most of the world currently uses **IPv4** (IP version 4). An IPv4 address looks like this:

`192.168.1.5`

This is called "dotted decimal notation." It's actually a 32-bit number, but humans are terrible at reading 32-bit binary strings (e.g., `11000000101010000000000100000101`). So we break it into four 8-bit pieces called "octets."

Each octet can be a number from 0 to 255.

Wait! Why 255?
Because $2^8 = 256$. Since we start at 0, the highest number we can represent with 8 bits is 255.

If you ever see an IP address like `999.888.777.666` in a movie, it's fake. It's the "555-0123" of the networking world.

## The Network and the Host

An IP address is actually two addresses in one.

1. **The Network Portion:** Identifies which "neighborhood" (network) you're in.
2. **The Host Portion:** Identifies which specific "house" (computer) you are within that neighborhood.

Think of it like a phone number.
In `(555) 123-4567`:

- `555` is the area code (the network).
- `123-4567` is the specific phone (the host).

How do we know where the network ends and the host begins? We use something called a **Subnet Mask**. We'll dive into that in a later lesson, but for now, just know that the first few numbers usually tell you which network you're on, and the last numbers tell you which specific machine you are.

## Public vs. Private IP Addresses

This is where things get a bit weird. Your computer actually has two IP addresses at the same time.

### 1. Your Private IP Address

This is your address inside your house (your LAN). It's usually something like `192.168.x.x` or `10.x.x.x`.

Your router assigns these. Every device in your house has a unique private IP, but they only work _inside_ your house. If you try to send a packet to `192.168.1.5` from a computer in another city, it won't work. It's like a room number in a hotel—it only makes sense if you're already inside the hotel.

### 2. Your Public IP Address

This is the address of your _entire house_ on the global internet. Your ISP (Internet Service Provider) gives you one public IP address.

When you go to a website, the website sees your _public_ IP. Your router is smart enough to take the incoming data and figure out which specific device in your house requested it. This magic trick is called **NAT** (Network Address Translation).

## Localhost: There's No Place Like 127.0.0.1

As a developer, you've probably seen `localhost` or `127.0.0.1` a thousand times.

This is a special "loopback" address. It's basically your computer's way of talking to itself. When you run a web server on your machine and go to `http://localhost:8000`, you're telling the network stack: "Hey, don't go out to the internet. Just loop this right back to me."

Every computer in the world has `127.0.0.1` reserved for itself. It's the universal "me" address.

## The Great Address Shortage (IPv6)

Remember when I said 32 bits?
$2^{32}$ is about 4.3 billion.

In the 70s, that seemed like an infinite amount of addresses. But then the internet exploded. Every person has a phone, a laptop, a tablet, and apparently, a smart toaster. We ran out of IPv4 addresses years ago.

So, we invented **IPv6**.

An IPv6 address is 128 bits long. It looks like a nightmare:
`2001:0db8:85a3:0000:0000:8a2e:0370:7334`

There are $2^{128}$ possible IPv6 addresses. That is a number so large ($3.4 \times 10^{38}$) that we could give every single atom on the surface of the Earth its own IP address and still have enough left over for another hundred Earths.

We're currently in a very slow transition from IPv4 to IPv6. It's going to take a while.

## Try This: Finding Your Addresses

Open your terminal and try these commands:

### On macOS or Linux:

- Type `ifconfig` (or `ip addr` on newer Linux distros).
- Look for `en0` or `eth0`. You'll see `inet 192.168.x.x`. That's your **Private IP**.

### On Windows:

- Type `ipconfig`.
- Look for `IPv4 Address`. That's your **Private IP**.

### For everyone:

- Go to Google and search for "What is my IP."
- The number it shows you is your **Public IP**.

Notice how they are different? That's NAT in action.

In the next lesson, we're going to zoom in on what happens _inside_ your house. We'll talk about MAC addresses, Ethernet frames, and why your router isn't the only piece of hardware making decisions.

Next up: [05-data-link-layer-the-local-delivery-service.md](05-data-link-layer-the-local-delivery-service.md)
