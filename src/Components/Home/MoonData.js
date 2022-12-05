import "./MoonData.css";
import Box from "../Common/Box";
import Img from "../Common/Img";
import CardData from "../Common/CardData";
import Panel from "../Common/Panel";

import navbarData from "../../Helpers/navbarData";

function MoonData() {
  return (
    <>
      <div className="container-fluid">
        <div style={{maxWidth: "1200px", margin: "0 auto"}}>
          <Panel content={navbarData.home} />
          <div
            className="row flex-article"
            style={{maxWidth: "1200px", margin: "0 auto"}}
          >
            <article style={{marginBottom: "24px"}} className="col-lg-8">
              <Box
                data={
                  <>
                    <h2>The Moon</h2>
                    <p className="mb-5">
                      The Moon, otherwise known as Luna, is the only natural
                      satellite of Earth. It was created 4.6 billion years ago,
                      and it is widely accepted that it was created when Earth
                      collided with a planet-sized object called Theia. It’s the
                      fifth-largest moon in our solar system and is the second
                      brightest object in the sky (after the Sun).
                    </p>
                    <h2>The Moon Profile</h2>
                    <p className="pb-5">
                      orbit: 384,400 km from Eart
                      <br />
                      diameter: 3476 km
                      <br />
                      mass: 7.35e22 kg
                    </p>
                    <h3>History of The Moon</h3>
                    <p>
                      Called Luna by the Romans, Selene and Artemis by the
                      Greeks, and many other names in other mythologies.
                    </p>
                    <p>
                      The Moon, of course, has been known since prehistoric
                      times. It is the second brightest object in the sky after
                      the Sun. As the Moon orbits around the Earth once per
                      month, the angle between the Earth, the Moon and the Sun
                      changes; we see this as the cycle of the Moon’s phases.
                      The time between successive new moons is 29.5 days (709
                      hours), slightly different from the Moon’s orbital period
                      (measured against the stars) since the Earth moves a
                      significant distance in its orbit around the Sun in that
                      time.
                    </p>
                    <p>
                      Due to its size and composition, the Moon is sometimes
                      classified as a terrestrial “planet” along with Mercury,
                      Venus, Earth and Mars.
                    </p>
                    <Img
                      src="https://thumbs.dreamstime.com/b/astronaut-moon-elements-image-furnished-nasa-52206897.jpg"
                      alt="man on the moon"
                    />

                    <p className="mt-5">
                      The Moon was first visited by the Soviet spacecraft Luna 2
                      in 1959. It is the only extraterrestrial body to have been
                      visited by humans. The first landing was on July 20, 1969
                      (do you remember where you were?); the last was in
                      December 1972. The Moon is also the only body from which
                      samples have been returned to Earth. In the summer of
                      1994, the Moon was very extensively mapped by the little
                      spacecraft Clementine and again in 1999 by Lunar
                      Prospector.
                    </p>
                    <p>
                      The gravitational forces between the Earth and the Moon
                      cause some interesting effects. The most obvious is the
                      tides. The Moon’s gravitational attraction is stronger on
                      the side of the Earth nearest to the Moon and weaker on
                      the opposite side. Since the Earth, and particularly the
                      oceans, is not perfectly rigid it is stretched out along
                      the line toward the Moon. From our perspective on the
                      Earth’s surface we see two small bulges, one in the
                      direction of the Moon and one directly opposite. The
                      effect is much stronger in the ocean water than in the
                      solid crust so the water bulges are higher. And because
                      the Earth rotates much faster than the Moon moves in its
                      orbit, the bulges move around the Earth about once a day
                      giving two high tides per day. (This is a greatly
                      simplified model; actual tides, especially near the
                      coasts, are much more complicated.)
                    </p>
                    <p>
                      But the Earth is not completely fluid, either. The Earth’s
                      rotation carries the Earth’s bulges slightly ahead of the
                      point directly beneath the Moon. This means that the force
                      between the Earth and the Moon is not exactly along the
                      line between their centers producing a torque on the Earth
                      and an accelerating force on the Moon. This causes a net
                      transfer of rotational energy from the Earth to the Moon,
                      slowing down the Earth’s rotation by about 1.5
                      milliseconds/century and raising the Moon into a higher
                      orbit by about 3.8 centimetres per year. (The opposite
                      effect happens to satellites with unusual orbits such as
                      Phobos and Triton).
                    </p>
                    <p>
                      The asymmetric nature of this gravitational interaction is
                      also responsible for the fact that the Moon rotates
                      synchronously, i.e. it is locked in phase with its orbit
                      so that the same side is always facing toward the Earth.
                      Just as the Earth’s rotation is now being slowed by the
                      Moon’s influence so in the distant past the Moon’s
                      rotation was slowed by the action of the Earth, but in
                      that case the effect was much stronger. When the Moon’s
                      rotation rate was slowed to match its orbital period (such
                      that the bulge always faced toward the Earth) there was no
                      longer an off-center torque on the Moon and a stable
                      situation was achieved. The same thing has happened to
                      most of the other satellites in the solar system.
                      Eventually, the Earth’s rotation will be slowed to match
                      the Moon’s period, too, as is the case with Pluto and
                      Charon.
                    </p>
                    <Img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlKZJK3SCixIYVnVYFCYBxzY0Ee1ze7tHVipD3qwz05RK8AJqXBig_3P5gjaXwe2gXY0A&usqp=CAU"
                      alt="moon bacground of pyramid"
                    />
                    <p>
                      Actually, the Moon appears to wobble a bit (due to its
                      slightly non-circular orbit) so that a few degrees of the
                      far side can be seen from time to time, but the majority
                      of the far side (left) was completely unknown until the
                      Soviet spacecraft Luna 3 photographed it in 1959. (Note:
                      there is no “dark side” of the Moon; all parts of the Moon
                      get sunlight half the time (except for a few deep craters
                      near the poles). Some uses of the term “dark side” in the
                      past may have referred to the far side as “dark” in the
                      sense of “unknown” (eg “darkest Africa”) but even that
                      meaning is no longer valid today!)
                    </p>
                    <p>
                      The Moon has no atmosphere. But evidence from Clementine
                      suggested that there may be water ice in some deep craters
                      near the Moon’s south pole which are permanently shaded.
                      This has now been reinforced by data from Lunar
                      Prospector. There is apparently ice at the north pole as
                      well.
                    </p>
                    <Img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC1On2_V5lGkcsqU08YgO2fBtjCl_6EqK7jw&usqp=CAU"
                      alt="full moon with child"
                    />
                    <p>
                      The Moon’s crust averages 68 km thick and varies from
                      essentially 0 under Mare Crisium to 107 km north of the
                      crater Korolev on the lunar far side. Below the crust is a
                      mantle and probably a small core (roughly 340 km radius
                      and 2% of the Moon’s mass). Unlike the Earth, however, the
                      Moon’s interior is no longer active. Curiously, the Moon’s
                      center of mass is offset from its geometric center by
                      about 2 km in the direction toward the Earth. Also, the
                      crust is thinner on the near side.
                    </p>
                    <p>
                      There are two primary types of terrain on the Moon: the
                      heavily cratered and very old highlands and the relatively
                      smooth and younger maria. The maria (which comprise about
                      16% of the Moon’s surface) are huge impact craters that
                      were later flooded by molten lava. Most of the surface is
                      covered with regolith, a mixture of fine dust and rocky
                      debris produced by meteor impacts. For some unknown
                      reason, the maria are concentrated on the near side.
                    </p>
                    <Img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTgNNnlgedSF2rPkvajgW55are5j3xVkFJQA&usqp=CAU"
                      alt="moon sea"
                      width="250px"
                    />
                    <p>
                      Most of the craters on the near side are named for famous
                      figures in the history of science such as Tycho,
                      Copernicus, and Ptolemaeus. Features on the far side have
                      more modern references such as Apollo, Gagarin and Korolev
                      (with a distinctly Russian bias since the first images
                      were obtained by Luna 3). In addition to the familiar
                      features on the near side, the Moon also has the huge
                      craters South Pole-Aitken on the far side which is 2250 km
                      in diameter and 12 km deep making it the the largest
                      impact basin in the solar system and Orientale on the
                      western limb (as seen from Earth; in the center of the
                      image at left) which is a splendid example of a multi-ring
                      crater.
                    </p>
                    <p>
                      A total of 382 kg of rock samples were returned to the
                      Earth by the Apollo and Luna programs. These provide most
                      of our detailed knowledge of the Moon. They are
                      particularly valuable in that they can be dated. Even
                      today, more than 30 years after the last Moon landing,
                      scientists still study these precious samples.
                    </p>
                    <p>
                      A total of 382 kg of rock samples were returned to the
                      Earth by the Apollo and Luna programs. These provide most
                      of our detailed knowledge of the Moon. They are
                      particularly valuable in that they can be dated. Even
                      today, more than 30 years after the last Moon landing,
                      scientists still study these precious samples.
                    </p>
                    <p>
                      Most rocks on the surface of the Moon seem to be between
                      4.6 and 3 billion years old. This is a fortuitous match
                      with the oldest terrestrial rocks which are rarely more
                      than 3 billion years old. Thus the Moon provides evidence
                      about the early history of the Solar System not available
                      on the Earth.
                    </p>
                    <Img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQvmGmpLhCww0togWyCsQ4l2dkFM2aRSmzxg&usqp=CAU"
                      alt="moon on the water"
                    />
                    <p>
                      Prior to the study of the Apollo samples, there was no
                      consensus about the origin of the Moon. There were three
                      principal theories: co-accretion which asserted that the
                      Moon and the Earth formed at the same time from the Solar
                      Nebula; fission which asserted that the Moon split off of
                      the Earth; and capture which held that the Moon formed
                      elsewhere and was subsequently captured by the Earth. None
                      of these work very well. But the new and detailed
                      information from the Moon rocks led to the impact theory:
                      that the Earth collided with a very large object (as big
                      as Mars or more) and that the Moon formed from the ejected
                      material. There are still details to be worked out, but
                      the impact theory is now widely accepted.
                    </p>
                    <p>
                      The Moon has no global magnetic field. But some of its
                      surface rocks exhibit remanent magnetism indicating that
                      there may have been a global magnetic field early in the
                      Moon’s history.
                    </p>
                    <Img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQyoWF_XPbsLi67Bdi7JdLn4s-paxEKeeczg&usqp=CAU"
                      alt="landing on moon"
                    />
                    <p>
                      With no atmosphere and no magnetic field, the Moon’s
                      surface is exposed directly to the solar wind. Over its 4
                      billion year lifetime many ions from the solar wind have
                      become embedded in the Moon’s regolith. Thus samples of
                      regolith returned by the Apollo missions proved valuable
                      in studies of the solar wind.
                    </p>
                  </>
                }
              ></Box>
            </article>

            <div className="extra-data col-lg-4">
              <div className="mb-5">
                <CardData
                  myStyle="rgb(144, 115, 0)"
                  header={"Quick Facts"}
                  data={
                    <>
                      <table className="table table-light table-bordered m-0">
                        <tbody>
                          <tr>
                            <td>Surface Temperature:</td>
                            <td>-233 to 123 °C</td>
                          </tr>
                          <tr>
                            <td>Circumference at Equator:</td>
                            <td>10,917.0 km</td>
                          </tr>
                          <tr>
                            <td>Diameter:</td>
                            <td>3,475 km</td>
                          </tr>
                          <tr>
                            <td>Mass:</td>
                            <td>
                              73,476,730,924,573,500 million kg (0.0123 x Earth)
                            </td>
                          </tr>
                          <tr>
                            <td>Distance</td>
                            <td>384,400 km</td>
                          </tr>
                        </tbody>
                      </table>
                    </>
                  }
                />
              </div>
              <CardData
                myStyle="rgb(89, 44, 37)"
                header="Blood Moon"
                data={
                  <>
                    <div className="text-center mt-4 mb-4">
                      <img
                        src="data:image/jpeg;base64,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"
                        width="200px"
                        alt="blood moon"
                      />
                      <p>
                        Blood Moon is not a scientific term, though in recent
                        times it is being widely used to refer to a total lunar
                        eclipse because a fully eclipsed Moon often takes on a
                        reddish color—like in the image above, which was taken
                        during the total lunar eclipse in September 2015.
                      </p>
                    </div>
                  </>
                }
              />
              <CardData
                myStyle="rgb(71, 92, 115)"
                header="Seas on the Moon?"
                data={
                  <>
                    <div className="text-center mt-4 mb-4">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSh5-aWgkTYivN49rP5dijC1umSF8kCW2V7A&usqp=CAU"
                        width="200px"
                        alt="Seas on the moon"
                      />
                      <p>
                        Lunar maria are the dark topographical features that can
                        be observed on the lunar surface, covering about 15% of
                        the Moon's crust, and which have dazzled astronomers and
                        moon-gazers for centuries. The maria, or ‘seas’, were
                        named by early astronomers who mistook them for actual
                        oceans on the Moon, but of course today we know that no
                        such large bodies of liquid water exist on the lunar
                        surface.
                      </p>
                    </div>
                  </>
                }
              />
              <CardData
                myStyle="rgb(37, 89, 64)"
                header="Peace on Earth"
                data={
                  <>
                    <div className="text-center mt-4 mb-4">
                      <img
                        src="https://content.time.com/time/photoessays/2009/top10_moon/outer_space_treaty.jpg"
                        width="200px"
                        alt="astreonaut on moon"
                      />
                      <p>
                        The U.S. joined with the Soviet Union in 1967 to create
                        the Outer Space Treaty, declaring the moon subject to a
                        similar set of rules as those used to govern
                        international waters on Earth. The treaty, which 97
                        other countries are now party to, makes the moon
                        off-limits for military purposes, keeping countries from
                        ever constructing bases or weaponry on the lunar
                        surface.
                      </p>
                    </div>
                  </>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MoonData;
