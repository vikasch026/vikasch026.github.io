# Subnetting: Slicing Up the Address Space

Welcome back. You've made it through the basics of routing, NAT, and how packets find their way across the wild, wild web. But there's a topic that makes even seasoned developers break out in a cold sweat. It's the "S" word. Subnetting.

People treat subnetting like it's some kind of arcane black magic involving complex calculus and animal sacrifices. It's not. It's just binary bookkeeping. If you can count to eight and understand that a bit is either a 1 or a 0, you can master subnetting.

### Why Do We Even Subnet?

Imagine you're the manager of a giant warehouse. You have 65,536 storage bins. If you just throw everything in there randomly, you'll never find your favorite stapler again. You need to divide that space into sections. Maybe section A is for electronics, section B is for office supplies, and section C is for the weird stuff nobody wants to talk about.

Networking is the same. If you have a massive block of IP addresses, you don't want every single device on the same "flat" network. Why?

1. **Efficiency**: Broadcast traffic is like a loud guy with a megaphone. In a flat network, every time a computer shouts "Hey, who has this IP?", every other computer has to listen. If you have 10,000 computers, that's a lot of noise.
2. **Security**: Do you really want the guest Wi-Fi in the lobby to be on the same network as your database server containing all the credit card info? Probably not.
3. **Organization**: It's just easier to manage. "Everything in the 10.0.1.x range is a printer" is a great rule until you realize you have 300 printers and only 254 slots.

### The Mask Behind the Magic

You've seen those numbers that look like IP addresses but usually end in 255 or 0. Like `255.255.255.0`. That's a subnet mask.

Think of an IP address like a house address. Part of it identifies the street, and part of it identifies the house number. The subnet mask is the line in the sand that tells you where the street name ends and the house number begins.

Let's look at an IP: `192.168.1.50`.
And a mask: `255.255.255.0`.

In binary (don't panic!), that mask looks like this:
`11111111.11111111.11111111.00000000`

The 1s mean "This part is the network ID (the street)."
The 0s mean "This part is the host ID (the house number)."

Since the first three groups (octets) are all 1s, we know that `192.168.1` is the name of our street. Any device starting with those three numbers is on our local subnet. The last number, `50`, is our specific house.

### CIDR Notation: The Shorthand

Writing out `255.255.255.0` is tedious. Network engineers are lazy, so they invented CIDR (Classless Inter-Domain Routing) notation. You just count the number of 1s in the mask.

`255.255.255.0` has twenty-four 1s. So we write it as `/24`.
`192.168.1.50/24` means the same thing as "IP 192.168.1.50 with mask 255.255.255.0".

If we had a mask of `255.255.0.0`, that's sixteen 1s. So it's a `/16`.
This gives us a lot more room for houses but fewer streets.

### How to Calculate Subnets Without Crying

Let's say you have a `/24` network. That gives you 8 bits for hosts (the zeros at the end of the mask).
`2 to the power of 8` is 256.
But wait! You can't use all 256.

- The first address (ending in .0) is the **Network Address**. It's the name of the street itself.
- The last address (ending in .255) is the **Broadcast Address**. It's the megaphone everyone uses to shout.

So, for a `/24`, you have `256 - 2 = 254` usable IP addresses for your actual computers.

What if you need to slice that `/24` into two smaller pieces? You "borrow" a bit from the host side and give it to the network side.
Instead of twenty-four 1s, you now have twenty-five 1s. A `/25`.

The mask becomes `255.255.255.128`.
Binary: `11111111.11111111.11111111.10000000`

Now you have two subnets:

1. `192.168.1.0` to `192.168.1.127`
2. `192.168.1.128` to `192.168.1.255`

In each piece, you still lose the first and last address for the network and broadcast. So each subnet has `128 - 2 = 126` usable addresses.

### The "Cheat Sheet" Approach

You don't need to do binary math in your head while a router is screaming at you. Just memorize the patterns for the last octet:

| CIDR | Mask | Total IPs | Usable IPs                          |
| ---- | ---- | --------- | ----------------------------------- |
| /24  | .0   | 256       | 254                                 |
| /25  | .128 | 128       | 126                                 |
| /26  | .192 | 64        | 62                                  |
| /27  | .224 | 32        | 30                                  |
| /28  | .240 | 16        | 14                                  |
| /29  | .248 | 8         | 6                                   |
| /30  | .252 | 4         | 2 (Common for point-to-point links) |

### Practical Example: The Startup Office

You have a `/24` network (`192.168.50.0/24`). Your boss wants three separate networks:

1. **Developers**: Need at least 100 IPs.
2. **Sales**: Need at least 50 IPs.
3. **IoT Toasters**: Need 10 IPs.

How do we slice it?

- Developers: A `/25` gives us 126 usable IPs. Perfect. We take `192.168.50.0/25`. (Addresses .0 to .127)
- Sales: We have the other half of the /24 left (starting at .128). A `/26` gives us 62 usable IPs. Perfect. We take `192.168.50.128/26`. (Addresses .128 to .191)
- Toasters: We have the space from .192 to .255 left. A `/28` gives us 14 usable IPs. Perfect. We take `192.168.50.192/28`. (Addresses .192 to .207)

See? It's just a pie. You keep cutting it until everyone has a slice, and you try not to leave too many crumbs.

### Try This Exercise

You're given `10.0.0.0/24`.

1. How many total IP addresses are in this range?
2. What is the subnet mask in "dotted decimal" format?
3. If you split this into four equal subnets, what is the CIDR notation for each?
4. How many usable hosts are in each of those four subnets?

(Scroll down for the answers... keep scrolling... okay, stop.)

1. 256
2. 255.255.255.0
3. /26 (We borrowed 2 bits: 2^2 = 4 subnets)
4. 62 (64 total minus network and broadcast)

### Summary

Subnetting is just the art of drawing boundaries. It keeps the "broadcast storms" at bay and makes sure your smart fridge isn't sniffing the traffic from the accounting department.

Next up, we're going to look at the protocols that make all of this happen automatically so you don't have to walk around the office with a clipboard assigning IP addresses by hand. Get ready for DHCP and ARP.
