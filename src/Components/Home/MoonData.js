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
            <article className="col-lg-8">
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
