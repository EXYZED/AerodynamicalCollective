---
layout: post
title:  "F1inSchools Aerodynamical Principles"
date:   2019-07-06
excerpt: "Cohesive guide to F1inSchools Aerodynamics."
image: "https://images.unsplash.com/photo-1505739818593-e7506ebf74c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
tag:
- F1inSchools
- Beginner
- STEM
- Racing
- Automotive
---

**This article was made to commemorate for the past F1inSchools team, [PROTOANIC Racing](https://PROTOANIC.com) - Winners of the UK National Autodesk Research and Development award.**

**We wish to share our ground-breaking research with the world**

**Warning Notice:** This page is WIP, Content in the page is subject to further updates.
{: .notice_danger}

## Setting Context

In Formula One Aerodynamics - most aerodynamic devices focus on the efficient delivery of downforce for the vehicle to attack turns with speed and control. With downforce, drag co-exists as a consequence.

**In F1inSchools, the turning aspect of racing no longer exists.** Cars will travel down a straight track at high speeds. Alternatively, this is known as a rocket-powered drag race. **Many of these aerodynamical devices in Formula One cars are not required and may slow your vehicle down.**

Although there are many other principles that allow a car to travel fast and first (i.e. weight), this article will **mainly** focus on the __aerodynamical__ aspects of F1inSchools racing and may briefly reference other properties.

**In other words - Downforce is a absolute no.**

## The functionality of the Front Wing Apparatus.

The design of the front wing plays a critical role in distributing weight, drag and lift components and forces of the vehicle. In many F1inSchools vehicle designs - the center of mass is usually established at the rear-center due to the added CO2 cartridge. Acknowledge that your front wing should be able to counteract this uneven weight by providing a turning moment and aerodynamical downforce component in the opposite turning moment created by the center of mass.

Creating turning moments, in general, will produce overall downforce on the vehicle. The vehicle design should account for creating lift as close as possible towards the center of mass to counteract this effect.

## Tire wake

Tire wake occurs when the moving air (also referenced as the freestream flow) collides with the opposing direction created by rotation. These rotating bodies can contribute to up to 40% of the total drag of the complete car, therefore, it can be concluded that the aerodynamic performance of a open-wheel racecar is comprehensively affected by the wheels.

With the exception of using smaller sized wheels, not much can be done to limit the wheel drag **directly**.

However, a common way of decreasing this wake turbulence is to reduce the contact between freestream flow and the surface area of the wheel, by changing the relative wing position and the wing endplate design to reduce wheel drag **indirectly** although many regulations prohibit that from being done - there are artificial means that reduce air and wheel contact, for example:

### Creating Aerodynamical Wheel-Wing Interactions

Creating an aerodynamic device that forces air to move in a different direction away from a solid object will decrease the rate of which air particles collide with the wheel and therefore will better maintain the momentum of motion for both air and solid - such aerodynamic device needs to account for the attack angle of the dominant surface which will be a main contributing factor for creating a variant amount of downforce and drag:  

* An **inappropriate high angle of attack will not be efficient** as most of the free-stream kinetic energy will be transferred through the collision of the aerodynamic device itself. In addition to this, an excessive amount of drag will be created behind this device and is counter-intuitive towards the problem,
* An **inappropriate low angle of attack will be redundant** towards the cause of reducing tire wake,
* A suitable angle of attack would be limited to the **technical constraints of the competition** - to cover as much as the wheel's contact surface area as possible without violating the regulations,
* A fillet, tangential to the angle of attack is a feature that can be added to the aerodynamical device to improve the airflow at higher angles of attack - so that momentum is gradually transferred - to have a smaller impulse effect

In addition to this -

> In 2007 Martinus Van Den Berg published a Ph.D. thesis on the interaction between a rotating wheel and an inverted wing. The research was sponsored by the Honda F1 Team, Which has evolved into the Mercedes F1 team.

[Thesis](https://eprints.soton.ac.uk/49927/)

It is crucial to reference from his thesis, the most interesting conclusion of his research was that the drag components of the front wheel were greater when the front wing ride-heights were high than it is at low ride-heights. This conclusion can be implemented to the design of an F1inSchools vehicle - by keeping the height of the wing as low as possible within the boundaries of the regulation. **This is later expanded upon in the 'Wing Efficiency' section.

## Vortex Generation

You may be able to observe that in real Formula One cars, some of many aerodynamical devices are vortex generators. In basic aviation vortex generators are shaped as a small vane attached to a lifting surface/airfoil.

When the body's motion is relative to the air, the vortex generator will create a vortex in which will partially remove slow-moving boundary layers in contact with the airfoil surface.

In other words, vortex generators in Formula One are often used to **delay the flow separation**. It is desirable to reduce flow separation on fast vehicles to reduce the size of wake which coherently will reduce drag as an effect.

Because as a **turbulent boundary layer is less likely to separate than a laminar one**, this characteristic is achieved by forcing turbulence to occur by drawing in energetic, rapid moving external air into the slow-moving boundary layer. This is essentially the basic function of Vortex Generation.

**It is a great misinterpretation to use this information to add excessive amounts of vortex generators to improve the aerodynamic efficiency of a vehicle.** Sometimes laminar flow is desired as it produces less air to skin friction than turbulent air flow - but is less resistant to flow separation, and therefore more volatile to instability.

In conclusion, to keep a flow attached to a body as long as possible, vortex generators transfer high energy air near to the car's body as much as possible.

* Avoid using sharp changes in angles relative to the direction of the wind. This reduces flow separation.
* Place VG's in front of areas of large streamlined surface area behind.

![Vortex Generation on a Mercedes F1 Vehicle](/images/VortexGenerator_Fig01.png)


## Increasing Wing Efficiency

> Credits to Adrian Newey's How to Build A Car for this section

An airplane will lift because the contours of its wing cause air to flow at different speeds across the top and bottom side of the airfoil. You may have heard of this before as **Bernoulli's Principle** or the **Equal Transit Theory**.

The pressure difference across the surface of the wing creates a distortion of the flowing field as it passes through the freestream air, this is known as circulation. In the case of racing cars, **this air is projected upwards to create downforce.** However, air on the high-pressure contour of the wing will often leak around the edge or tips of the wing and reduce the net difference between both areas, this tip leakage when combined with the forward movement of the vehicle will create a spiral-like structure known as the tip vortex. This tip leakage will reduce the aerodynamical efficiency of the wing.

Tip leakage can be subdued by adding endplates. These endplates prevent the reduction of efficiency by lengthening the path that air leakage follows, hence better maintaining the high pressure above and low pressure below the airfoil.

Tip leakage can also be reduced by increasing span, exemplified by sailplanes which have very long slender wings. Large spans also have an effect on the air leakage path.

It is also useful to mention that the use of biomimicry is applicable for also reducing tip leakage. Heavy river birds such as swans will fly just above the water with the tips of the wing at the edge of dipping into the water, powerful effects can be harnessed from this behavior:

1. If the wings are just about in contact with the water's surface, then the leak path is sealed as it is interrupted by the surface. Pressures on both sides are not compromised and hence the wing becomes more efficient.

2. The downwash of air behind the wing (created by circulation) reacts against the river's surface, creating a higher pressure underneath the wing - a phenomenon known as 'ground effect'.

## Ground Effect
In aviation, 'ground effect' occurs when the aircraft wings are close to a fixed surface - generating increased lift and reduced aerodynamic drag.

This is because when the wing is closer to the ground, vortices are interrupted by the ground and therefore reduce in size through dissipation. Downwash is reduced.

**Downwash** is a additional effect on lift for wings in aviation - the pressure differences caused by the "contour of the wing" as mentioned before will produce vortices.

 The downstream component of the force is called **induced drag** because it has been "induced" by the action of the tip vortices.

It is important to note that lift is generally perpendicular to the direction of the relative flow of wind because as downwash 'induces' the relative flow downwards, the angle of which lift is affected. For a inverted wing, having the wing as low as possible will induce such effect and produce a downforce component in the direction of the Z plane.

Therefore: **A lower induced drag and lower downwash will create a greater lift vector.** Due to the angle of downstream component.

Van Den Berg's thesis heavily explores the interaction between the ground effect phenomenon and different wing heights and is worthy to read for additional knowledge.
>Generally, induced drag is greater at altitudes - as induced drag is reduced at lower altitudes.

WIP



![McLarenHondaFN](https://images.unsplash.com/photo-1552849397-661879829965?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80){: .align-center}
