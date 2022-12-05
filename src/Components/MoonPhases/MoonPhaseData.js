import navbarData from "../../Helpers/navbarData";
import Box from "../Common/Box";
import Panel from "../Common/Panel";

import "./MoonPhaseData.css";
import useMoonData from "../../Hooks/useMoonData";
import moonPhasesImg from "../../Helpers/moonPhasesImg";

function MoonPhaseData() {
  const date = new Date().toLocaleDateString();
  const {moonData} = useMoonData();
  const currentPhase = moonData?.moonPhase.current.text;
  const currentMoonImage = moonData
    ? moonPhasesImg[currentPhase]
    : moonPhasesImg["Full moon"];

  const currentMoonState = moonData ? currentPhase : "Full moon";
  const currentMoonFranction = moonData
    ? moonData?.moonPhase.current.value
    : "0.5";

  const closetMoon = moonData
    ? moonData?.moonPhase.closest.text
    : "Third Quater";

  return (
    <>
      <div style={{maxWidth: "1100px", margin: "0 auto"}}>
        <Panel content={navbarData.moonData} />
        <div className="p-2">
          <Box
            data={
              <>
                <div className="row justify-content-between sec-1">
                  <div className="col-md-6">
                    <h3>
                      The Moon phases are commonly known as lunar phases, and
                      they represent the different shapes the Moon takes when it
                      is illuminated by the Sun as viewed from Earth.
                    </h3>
                    <p>
                      These lunar phases change regularly throughout the synodic
                      month – every 29.53 days, as the positions of the Earth
                      and Moon around the Sun shift.
                    </p>
                    <p>
                      The Moon is tidally locked to our Earth’s gravity, and
                      this prevents its rotation, causing only one facet of the
                      Moon to always face us. This side of the Moon is variously
                      sunlit, which is dictated by the Moon’s position in its
                      orbit.
                    </p>
                    <p>
                      Therefore, the sunlit portion of this face, also known as
                      the near side, can vary from 0% – at new Moon – to 100% at
                      full Moon. The twilight zone, or the moving line that
                      divides the daylit side and the night side of the Moon,
                      known as the lunar terminator, is the boundary between the
                      sunlit portion of the Moon and its darkened hemispheres.
                    </p>
                  </div>
                  <div className="col-md-5 moon-state">
                    <h3>Moon Phase for today {date}</h3>
                    <div className="text-center w-100">
                      <img
                        src={currentMoonImage}
                        width="300px"
                        alt="moonPhase"
                      />
                    </div>
                    <div className="data-moon">
                      <p>
                        Moon name: <strong>{currentMoonState}</strong>
                      </p>
                      <p>
                        Closest Moon: <strong>{closetMoon}</strong>
                      </p>
                      <p>
                        Moon Fraction: <strong>{currentMoonFranction}</strong>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="sec-1">
                  <h3>Phases of the Moon</h3>
                  <p>
                    There are four principle lunar phases in the western
                    culture, known as the New Moon, First Quarter, Full Moon,
                    and Third Quarter. These phases last for around 7.4 days;
                    however, they vary slightly due to the Moon’s
                    elliptical-shaped orbit.
                  </p>
                  <p>
                    There are also four intermediate phases, Waxing Crescent,
                    Waxing Gibbous, Waning Gibbous and Waning Crescent.
                  </p>
                  <p>
                    Apart from a couple of craters near the lunar poles, such as
                    the famous Shoemaker crater, all parts of the Moon are
                    susceptible to around 13.77 days of light, followed by 13.77
                    days of night.
                  </p>
                  <p>
                    The darkest part of the Moon is the one always facing away
                    from us, and it is commonly referred to as the dark side of
                    the Moon. The Moon’s four principal phases occur when the
                    Moon’s ecliptic longitude is at an angle to the Sun, as
                    viewed from our planet, at 0°, 90°, 180°, and 270°,
                    respectively.
                  </p>
                  <p>
                    All of these phases appear at slightly different times at
                    different locations on Earth. There are also intervals
                    between these principal phases, where the Moon’s apparent
                    shape is either crescent or gibbous.
                  </p>
                  <p>
                    The intermediate phases of the Moon last one-quarter of a
                    synodic month, or 7.38 days on average. The term waxing is
                    used for an intermediate stage when the Moon’s apparent
                    shape is thickening, from new to full Moon, and the term
                    waning is applied when it is thinning.
                  </p>
                  <p>
                    The most extended duration between the full Moon to new
                    Moon, or vice versa, lasts for around 15 days and 14.5
                    hours, while the shortest period lasts only about 13 days
                    and 22.5 hours.
                  </p>
                </div>
                <div className="sec-1">
                  <div className="table-responsive">
                    <table class="table table-bordered table-dark">
                      <thead>
                        <tr class="tableizer-firstrow">
                          <th colspan="7">
                            Principal and Intermediate Phases of the Moon
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Moon Phase</td>
                          <td>Northern Hemisphere</td>
                          <td>Southern Hemisphere</td>
                          <td>Visibility</td>
                          <td>Average moonrise time</td>
                          <td>Mid-phase standard time</td>
                          <td>Average moonset time</td>
                        </tr>
                        <tr>
                          <td>New Moon</td>
                          <td colspan="2">
                            Disc entirely in Sun's shadow - lit by earthshine
                            only
                          </td>
                          <td>Invisible - too close to the Sun</td>
                          <td>6 am - 06.00</td>
                          <td>Noon</td>
                          <td>6 pm - 18:00</td>
                        </tr>
                        <tr>
                          <td>Waxing Crescent</td>
                          <td>Right side, 0.1% - 49.9% lit disc</td>
                          <td>Left side, 0.1 - 49.9% lit disc</td>
                          <td>Late morning to post-dusk</td>
                          <td>9 am - 09:00</td>
                          <td>3 pm - 15:00</td>
                          <td>9 pm - 21:00</td>
                        </tr>
                        <tr>
                          <td>First Quarter</td>
                          <td>Right side, 50% lit disc</td>
                          <td>Left side, 50% lit disc</td>
                          <td>Afternoon and early evening</td>
                          <td>Noon</td>
                          <td>6 pm - 18:00</td>
                          <td>Midnight - 00:00</td>
                        </tr>
                        <tr>
                          <td>Waxing Gibbous</td>
                          <td>Right side, 50.1% - 99.9% lit disc</td>
                          <td>Left side, 50.1% -99.9% lit disc</td>
                          <td>Late afternoon and during the night</td>
                          <td>3 pm - 15:00</td>
                          <td>9 pm - 21:00</td>
                          <td>3 am - 03:00</td>
                        </tr>
                        <tr>
                          <td>Full Moon</td>
                          <td colspan="2">100% Illuminated disc</td>
                          <td>Sunset to sunrise - all night</td>
                          <td>6 pm - 18:00</td>
                          <td>Midnight - 00:00</td>
                          <td>6 am - 06:00</td>
                        </tr>
                        <tr>
                          <td>Waning Gibbous</td>
                          <td>Left side, 99.9% - 50.1% lit disc</td>
                          <td>Right side, 99.9% - 50.1% lit disc</td>
                          <td>Most of the night and early morning</td>
                          <td>9 pm - 21:00</td>
                          <td>3 am - 03:00</td>
                          <td>9 am - 09:00</td>
                        </tr>
                        <tr>
                          <td>Last Quarter</td>
                          <td>Left side, 50% lit disc</td>
                          <td>Right side, 50% lit disc</td>
                          <td>Late night and morning</td>
                          <td>Midnight - 00:00</td>
                          <td>6 am - 06:00</td>
                          <td>Noon</td>
                        </tr>
                        <tr>
                          <td>Waning Crescent</td>
                          <td>Left side, 49.9% - 0.1% lit disc</td>
                          <td>Right side, 49.9% - 0.1% lit disc</td>
                          <td>Pre-dawn to early afternoon</td>
                          <td>3 am - 03:00</td>
                          <td>9 am - 09:00</td>
                          <td>3 pm - 15:00</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="sec-1">
                  <p>
                    The <strong>New Moon</strong> appears higher on the summer
                    solstice than on the winter solstice, while the First
                    Quarter Moon appears higher on the spring equinox than on
                    the autumnal/fall equinox.
                  </p>
                  <p>
                    The <strong>Full Moon</strong> appears higher on the winter
                    solstice than on the summer solstice, while the Last Quarter
                    Moon appears higher on the autumnal/fall equinox than on the
                    spring equinox.
                  </p>
                  <p>
                    The <strong>Waxing Crescent</strong> Moon appears higher on
                    the mid-spring – May 5 in the Northern Hemisphere / November
                    7 – Southern Hemisphere, than on the mid-autumn – November 7
                    in the Northern Hemisphere / May 5 in the Southern
                    Hemisphere.
                  </p>
                  <p>
                    The <strong>Waxing Gibbous</strong> Moon appears higher on
                    mid-winter – February 4 in the Northern Hemisphere / August
                    7 in the Southern Hemisphere, than on the mid-summer –
                    August 7 in the Northern Hemisphere / February 4 in the
                    Southern Hemisphere.
                  </p>
                  <p>
                    The <strong>Waning Gibbous</strong> Moon appears higher on
                    the mid-autumn – November 7 in the Northern Hemisphere / May
                    5 in the Southern Hemisphere – than on mid-spring – May 5 in
                    the Northern Hemisphere / November 7 in the Southern
                    Hemisphere.
                  </p>
                  <p>
                    The <strong>Waning Crescent</strong> Moon appears higher on
                    the mid-summer – August 7 in the Northern Hemisphere /
                    February 4 in the Southern Hemisphere – than on mid-winter –
                    February 4 in the Northern Hemisphere / August 7 in the
                    Southern Hemisphere.
                  </p>
                  <p>
                    If the <a href="https://nineplanets.org/the-sun/">Sun</a>
                    and the Moon are aligned on Earth’s same side, then the Moon
                    is termed as “new,” and the side of the Moon facing Earth is
                    not illuminated by the Sun.
                  </p>
                  <p>
                    When the Moon “waxes” – the amount of illuminated surface as
                    seen from Earth is increasing, and the lunar phases progress
                    through new Moon, crescent moon, first-quarter Moon, gibbous
                    Moon, and Full Moon.
                  </p>
                  <p>
                    The Moon is then said to “wane” as it passes through the
                    gibbous Moon phase, third-quarter Moon, crescent Moon, and
                    then back to New Moon.
                  </p>
                  <p>
                    The expressions old Moon and new Moon are not
                    interchangeable. The old Moon is a waning silver that
                    becomes invisible to the naked eye, until the moment when it
                    aligns with the Sun and begins to wax, at which point it
                    becomes new again.
                  </p>
                  <p>
                    The term “half Moon” is commonly used to mean the first- and
                    third-quarter Moon phases, while the term quarter itself
                    refers to the extent of the Moon’s cycle around the Earth,
                    and not its shape.
                  </p>
                  <p>
                    When an illuminated hemisphere is viewed from a certain
                    angle, the portion of the illuminated area, which is
                    visible, will appear as a two-dimensional shape as defined
                    by the intersection of an ellipse and circle.
                  </p>
                  <p>
                    The ellipse’s central axis coincides with the circle’s
                    diameter. If the half-ellipse is convex to the half-circle,
                    then the shape will be gibbous – bulging outwards – and if
                    the half-ellipse is concave for the half-circle, then the
                    profile will be a crescent. When a crescent Moon occurs, the
                    earthshine phenomenon may be visible, where the darker side
                    of the Moon dimly reflects indirect sunlight reflected from
                    Earth.
                  </p>

                  <h3>Earthshine Effect</h3>

                  <p>
                    If the Moon, as seen from Earth, is a thin crescent, then
                    Earth, as viewed from the Moon, is almost entirely lit by
                    the Sun. Commonly, the dark side of the Moon is dimly lit by
                    indirect sunlight reflected from Earth; however, it is
                    bright enough to be seen from Earth.
                  </p>
                  <p>
                    This phenomenon is known as earthshine, and sometimes it is
                    described as “the old moon in the new moon’s arms” or “the
                    new moon in the old moon’s arms.”
                  </p>

                  <h3>Latitude Orientation</h3>

                  <p>
                    In the Northern Hemisphere, if the left/east side of the
                    Moon is dark, then the brightest part is thickening, and the
                    Moon is described as waxing – shifting towards the Full Moon
                    phase.
                  </p>
                  <p>
                    If the right/west side of the Moon is dark, then the bright
                    part is thinning, and the Moon is described as waning – it
                    is past full and shifting towards the New Moon phase.
                  </p>
                  <p>
                    If the observer is situated in the Northern Hemisphere, the
                    Moon’s right side is the part that is always waxing – that
                    is, if the right side is dark, the Moon is darkening; if the
                    right side is lit, the Moon is brightening.
                  </p>
                  <p>
                    In the Southern Hemisphere, the Moon is viewed through an
                    inverted perspective, or rotated at 180&deg;, to that of the
                    Northern Hemisphere, and to all of the images posted here.
                    As such, the opposite sides appear to either wax or wane.
                  </p>
                  <p>
                    Close to the equator, the lunar terminator – or twilight
                    zone – will appear horizontal during the mornings and
                    evenings. Since the descriptions above of the lunar phases
                    only apply at high and middle latitudes, observers moving
                    towards the tropics from either northern or southern
                    latitudes will view the Moon rotated anti-clockwise or
                    clockwise. (About the pictures from this post)
                  </p>
                  <p>
                    The lunar crescent can open upward or downward, with the
                    “horns” of the crescent pointing up or down, respectively.
                    When the Sun appears above the Moon in the sky, the crescent
                    opens downward, while when the Moon is above the Sun, the
                    crescent opens upward.
                  </p>
                  <p>
                    The most precise and brightest crescent Moon may be visible
                    when the Sun is below the horizon, which implies that the
                    Moon must be above the Sun from our perspective, and the
                    crescent is thus opened upward.
                  </p>
                  <p>
                    This is the orientation in which the crescent Moon is most
                    often seen from the tropics. The waxing and waning crescents
                    look quite similar; however, the waxing crescent appears in
                    the western sky in the evening, while the waning crescent in
                    the eastern sky appears in the morning.
                  </p>

                  <h3>Moon Phases Calendar</h3>

                  <p>
                    The cycle of lunar phases / synodic month repeats every
                    29.53 days, while the Gregorian calendar month lasts for
                    around 30.44 days. For each successive month, the timing of
                    the lunar phase shifts by an average of almost one day. One
                    lunar year is equivalent to 354 days.
                  </p>
                  <p>
                    If you want to create a Moon Phase calendar, one must
                    photograph the Moon’s phase every day for a month. This
                    procedure should start in the evening after sunset and will
                    be repeated every 24 hours and 50 minutes later, ending in
                    the morning before sunrise.
                  </p>
                  <p>
                    On a calendar listing moonrise or moonset times, some days
                    may appear to be skipped. This is because the Moon follows a
                    predictable orbit every month.
                  </p>
                  <p>
                    The skipped day is a feature of the Moon’s eastward movement
                    in relation to the Sun, which at most latitudes will cause
                    the Moon to rise later each day.
                  </p>

                  <h3>Calculating Phase</h3>

                  <p>
                    The four intermediate lunar phases, the New Moon, First
                    Quarter, Full Moon, and Third Quarter, last for almost a
                    week / 7.38 days on average; however, they vary slightly due
                    to the lunar apogee and perigee.
                  </p>
                  <p>
                    The days counted from a New Moon is the Moon’s age, with
                    each cycle of phases known as a lunation. The approximate
                    age of the Moon may be calculated for any date by summing
                    the days since a New Moon, like for example, January 1,
                    1900, or August 11, 1999, and then reducing this modulo
                    29.530588853 – the length of a synodic month.
                  </p>
                  <p>
                    The difference between two dates can be summed by
                    subtracting the Julian day number of one from that of the
                    other, or simpler formulae are giving the number of days
                    since December 31, 1899.
                  </p>
                  <p>
                    However, this method of calculus assumes a perfectly
                    circular orbit. It makes no allowance for the time of day at
                    which the New Moon occurred and, therefore, may be incorrect
                    by several hours.
                  </p>
                  <p>
                    The accuracy is even further reduced if the difference
                    between the required date and the reference date is more
                    considerable.
                  </p>

                  <h3>Effect of Parallax</h3>

                  <p>
                    The Earth spans an angle of about two degrees when seen from
                    the Moon. Thus, an observer from Earth views the Moon when
                    it is close to the eastern horizon from an angle that is
                    around 2 degrees different from an observer who sees the
                    Moon from the western horizon.
                  </p>
                  <p>
                    The Moon moves for around 12 degrees throughout its orbit
                    per day; thus, if we, the observers, were stationary, we
                    would see the phases of the Moon at times that differ by
                    around one-sixth of a day / 4 hours.
                  </p>
                  <p>
                    However, we are on the surface of a continually rotating
                    Earth. Thus, if a person sees the Moon on the eastern
                    horizon, another would see it on the western horizon around
                    twelve hours later. This adds a fluctuating factor to the
                    apparent progression of the lunar phases.
                  </p>
                  <p>
                    These events occur slower when the Moon is high in the sky
                    than when it is below the horizon. The Moon appears to move
                    unevenly, and this can be applied towards its phases as
                    well.
                  </p>
                  <p>
                    The four hour oscillation period is a small fraction of a
                    month, and it doesn’t have a significant effect on the
                    Moon’s appearance; however, it does affect the lunar phases
                    calculation methodology and its accuracy.
                  </p>

                  <h1>Related Questions</h1>
                  <h3>What is Synodic Month?</h3>

                  <p>
                    The lunar month is also known as the synodic month, and it
                    refers to a measured period of time. In this case, the
                    synodic month is measured from a Moon phase until the return
                    of that exact phase. The average duration for this
                    measurement is usually at around 29.5 days.
                  </p>

                  <h3>What are the Moon&nbsp; Phases?</h3>

                  <p>
                    The Moon goes through different appearance phases since it
                    orbits our Earth, causing a portion of its surface to be
                    illuminated, which later changes in shape. This is why the
                    Moon has phases.
                  </p>
                  <p>
                    The Moon orbits our Earth roughly every 27.3 days; however,
                    the synodic month, or lunar month, lasts for 29.5 days. This
                    happens because the Moon is catching us up from behind in
                    around 2.2 days. After all, Earth is moving faster.
                  </p>
                  <h3>What is the Harvest Moon?</h3>

                  <p>
                    The Harvest Moon is when a full moon occurs close to the
                    autumnal equinox (when night and day are equal). The Moon is
                    referred to as the Harvest Moon in this event due to its
                    bright appearance in the sky, which allowed farmers to work
                    longer into the fall night, reaping spring’s rewards and
                    summer labors.
                  </p>
                  <p>
                    Because the equinox falls in late September, the full Moon
                    in September is often given this name. However, it can
                    happen in October as well. Every full Moon has its own name,
                    and they are associated with either ancient deities,
                    agriculture, weather, or other things. Here are their names:
                  </p>
                  <ul>
                    <li>
                      <strong>January – Moon after Yule or Wolf Moon</strong>
                    </li>
                    <li>
                      <strong>February – Snow Moon</strong>
                    </li>
                    <li>
                      <strong>March – Sap Moon</strong>
                    </li>
                    <li>
                      <strong>April – Grass Moon</strong>
                    </li>
                    <li>
                      <strong>May – Planting Moon</strong>
                    </li>
                    <li>
                      <strong>June – Honey Moon</strong>
                    </li>
                    <li>
                      <strong>July – Thunder Moon</strong>
                    </li>
                    <li>
                      <strong>August – Grain Moon</strong>
                    </li>
                    <li>
                      <strong>September – Fruit or Harvest Moon</strong>
                    </li>
                    <li>
                      <strong>October – Hunter of Harvest Moon</strong>
                    </li>
                    <li>
                      <strong>November – Frosty Moon</strong>
                    </li>
                    <li>
                      <strong>December – Moon before Yule</strong>
                    </li>
                  </ul>

                  <h3>What is a Blue Moon?</h3>

                  <p>
                    A whole month isn’t equal to two Full Moon’s. However,
                    around three years, there are two full Moon’s in one
                    calendar month. In recent times, the secondary full Moon has
                    often been termed as the Blue Moon.
                  </p>
                  <p>
                    Blue Moons are rare since they occur once every 33 months.
                    No one knows who coined the name, Blue Moon, but it is
                    entirely plausible that it received this name since the Moon
                    does appear bluish.
                  </p>
                  <p>
                    High altitude particles may cause this; however, some
                    believe that the name comes from an old phrase: “once in a
                    blue moon.”
                  </p>

                  <h3>Why do we see Only One Face of the Moon?</h3>

                  <p>
                    Due to the Earth and Moon’s gravitational interactions,
                    Earth’s natural satellite has begun to slow down in
                    rotational velocities. Because of this, the Moon completes
                    one rotation on its axis at exactly the same time when it
                    completes an orbit around our Earth.
                  </p>
                  <p>
                    This gravitational drain has a mutual effect, though. Our
                    Earth’s rotational speed is also slowed down by these
                    interactions, with its products being easily observed in
                    ocean tides.
                  </p>

                  <h3>
                    When Does the Young Moon Become Visible in the Evening Sky?
                  </h3>

                  <p>
                    Three principal factors determine the young Moon’s
                    visibility in the evening sky:
                  </p>
                  <ul>
                    <li>
                      <strong>The sky’s clarity</strong>
                    </li>
                    <li>
                      <strong>
                        The angle of the ecliptic in regards to the horizon
                      </strong>
                    </li>
                    <li>
                      <strong>The accuracy of the observer’s eyesight</strong>
                    </li>
                  </ul>
                  <p>
                    If the ecliptic is perpendicular to the horizon, then the
                    young Moon appears visible to the naked eye much earlier.
                  </p>

                  <h3>What is a Wolf Moon?</h3>

                  <p>
                    In ancient times, people referred to the Full Moon that
                    occurred in January, as the Wolf Moon. Many believe that
                    this was because the wolves howled much more fiercely in
                    this month, perhaps due to a lack of food. The January full
                    Moon is also known as the Moon before Yule.
                  </p>
                </div>
              </>
            }
          />
        </div>
      </div>
    </>
  );
}

export default MoonPhaseData;
