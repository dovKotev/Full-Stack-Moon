import "./DataAbout.css";
import Box from "../Common/Box";
import Panel from "../Common/Panel";
import BackgroundImage from "../Common/BackgroundImage";
import navbarData from "../../Helpers/navbarData";

function DataAbout() {
  return (
    <>
      <div className="p-3">
        <div className="mt-4" style={{maxWidth: "1100px", margin: "0 auto"}}>
          <Panel content={navbarData.about} />
          <div className="mt-4">
            <Box
              data={
                <>
                  <div className="about-style mt-4">
                    <div className="about-p">
                      <p className="h4 mb-5">
                        Do you ever look up to the sky and find your self stare
                        to the moon an dthink about it. The moon is the nearest
                        object of us, people People for thousands of years have
                        studied it and tried to understand what it symbolizes at
                        any given moment.
                      </p>
                      <BackgroundImage url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT16Kq7lohEfWPNOAuoOl8wOuEiDwamz_0sQ&usqp=CAU" />

                      <p className="h4 mb-5 mt-1">
                        The moon is special in its proximity to us, in its
                        constant change and in what it symbolizes, it is not for
                        nothing that it appears in many books, stories and
                        legends.
                      </p>
                      <p className="h4 mb-5">
                        This site was developed for those who occasionally look
                        up at the moon and stay that way for minutes like me or
                        simply for those who love the moon and want to learn new
                        things about it.
                      </p>
                      <p className="h4 mb-5">
                        We offer on this website fascinating information about
                        the moon, in addition we have tracking of the different
                        forms of the moon according to real time so you can
                        follow it and know when there is a full moon or when it
                        is just born.
                      </p>

                      <BackgroundImage url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSvYjiCZ5dGfq6dcvFwzEh50suH8SRN-CnNg&usqp=CAU" />
                      <p className="h4 mb-5 mt-4">
                        In addition, we have a store where people can post their
                        creations on the moon such as jewelry or works of art
                        and you can purchase them from us in our store, so that
                        you can enjoy the moon even during the day.
                      </p>
                    </div>
                  </div>
                </>
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default DataAbout;
