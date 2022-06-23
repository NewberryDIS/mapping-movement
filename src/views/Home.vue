<template lang="pug">
.navbuttons
  router-link.button.-outline(to="/essays/") Essays
  router-link.button.-outline(to="/maps/") Maps
//- .frame#tify
p American “Maps of movement” embrace all manner of cartography that enabled or illuminates the historical movements of human beings, goods, and other mappable phenomena across, around, and from the Americas. They are powerful tools for the studying the history of geographical mobility and routemaking as well as economic, social, cultural, intellectual, and political life. From sea charts used by maritime explorers to road maps used by motorists to visit national parks, maps of movement document the detail and pattern of routes; the pace and character of various modes of travel; the imprint of transportation and routes of travel on settlement and migratory patterns; the role of commercial marketing and civic boosterism in geographical movement; and the role mapping and geographical study have played in understanding the earth's surface. American maps of movement have both enabled mobility and shaped conceptions of American landscapes and their possibilities.
p Mapping Movement in American History and Culture is a publication of the Newberry Library's Hermon Dunlap Smith Center for the History of Cartography. This online archive and companion to the study, interpretation, and educational use of American maps of movement features more than five hundred high-resolution images of maps drawn from the extensive collections of the Newberry Library dating from the sixteenth to the twenty-first century. The archive is fully searchable by a variety of topics, including mode and context of travel, map format and genre, authors and publishers, geographic area, subject, and date. Accompanying thematic essays and image captions by leading scholars in their fields offer a variety of perspectives on the history and technology of American travel, transportation, commerce, and communications.
p The production of this site was made possible by a major grant from the Preservation and Access Division of the National Endowment for the Humanities, an independent agency of the United States Government.
p The editors are deeply appreciative of the intellectual and technical guidance and generous and patient support provided by the Northwestern University Advanced Media Production Studio (NUAMPS), a professional production team within Northwestern University Information Technology (NUIT), Academic & Research Technologies, who undertook the site design, technical development, and image capture and processing.

h2 How to Use this Site
p At present thirteen essay modules have been published, with ten more to be added by autumn 2016. These essays are accessible by clicking on the “essays” button at the top of any page in the site. Each of these essays references ten map items from the archive. These are accessible from a thumbnail gallery at top right on the essay’s landing page. Clicking on one of these thumbnails opens a selection page, with a caption prepared by the essay’s author and a gallery of images for the selection, which may include more than one image (for example, of the front and back of the selected map). Clicking on any thumbnail or “full metadata” button in the gallery opens a high-resolution image that can be panned and zoomed as desired and opened to a full-screen image. Clicking on the linked elements of the metadata provides a “back door” to the browsing function of the archive. For example, by clicking on “tourism” under Context of Travel will take you to a gallery of all maps in the archive associated with tourism.
p It is also possible to browse the archive direct by clicking the “browse” button at the top of any page. At first this will open a gallery of all images in the archive. However, browsing can be refined by subject, topic, date range, author and publisher by selecting the appropriate terms in the menu provided at right. Experimentation with this browsing menu will allow you to create browsing galleries associating two or more attributes (for example, “tourism” maps published by “Rand McNally & Co.” before 1900).
p Comments and questions may be addressed to: smithctr@newberry.org.

h4 Credits and Acknowledgments
p All essays in Mapping Movement in American History and Culture were subject to double-blind peer review. The editors are grateful for the conscientious work of many peer reviews, who must remain nameless.

dl
  dt Coeditors:
  dd James R. Akerman, The Newberry Library (Project Director)
  dd Peter Nekola, The Newberry Library

dl
  dt Project Advisors:
  dd Michael P. Conzen, University of Chicago
  dd Gerald A. Danzer, University of Illinois at Chicago
  dd Ronald Grim, Boston Public Library
  dd Jo Guldi, Brown University
  dd David Rumsey, Cartography Associates
  dd Susan Schulten, University of Denver

h4 Many departments of the Newberry Library cooperated in the creation of this resource, including:

dl
  dt The Newberry Library, Department of Digital Images and Services:
  dd Jennifer Thom
  dd Catherine Gass
  dd John Powell
  dd Adam Strohm

dl
  dt The Newberry Library, Department of Collection Services:
  dd Linda Ballinger
  dd Patrick Morris
  dd Jessica Grzegorski
  dd Graham Greer

dl
  dt The Newberry Library, Editorial Staff:
  dd Will Gosner
  dd Anne E. Cullen
  dd Jarrett P. Dunning
  dd Kristin Emery
  dd Andrew Epps
  dd Douglas Knox
  dd Maisie O'Malley

dl
  dt Editorial Assistants:
  dd Daniel Greenberg
  dd Daniel Jacobs

dl
  dt The Newberry Library, Department of Conservation Services:
  dd Lesa Dowd
  dd Linda Kinnaman
  dd Barbara Korbel
  dd Kaytee Meade
  dd Virginia Meredith
  dd Becky Saiki

dl
  dt The Newberry Library, Department of Information Technology:
  dd Drin Gyuk

dl
  dt This project could not have been undertaken without the support of:
  dd James Grossman
  dd Daniel Greene
  dd David Spadafora
  dd Diane Dillon
  dd D. Bradford Hunt

h4 This project also owes much to the tireless work of the Newberry Library Special Collections and General Reading Room Staff.

dl
  dt Additional materials appear in the archive through the courtesy of:
  dd Arthur and Janet Holzheimer
  dd The British Library
  dd The Milwaukee Public Library
  dd The United States Army Corps of Engineers

dl
  dt The following contributors gifted materials for the project to the Newberry Library:
  dd James R. Akerman
  dd Gerald A. Danzer
  dd Ralph E. Ehrenberg
  dd Peter Nekola

</template>

<script>
// import sampleManifests from '../data/sample-manifests.json'

// const defaultManifestUrl = 'https://manifests.sub.uni-goettingen.de/iiif/presentation/PPN623133725/manifest'

export default {
  data() {
    // return {
    //   manifestUrl: defaultManifestUrl,
    //   sampleManifests,
    //   tify: null,
    // }
  },
  mounted() {
    // this.loadManifest(this.manifestUrl)
  },
  beforeUnmount() {
    // this.tify.destroy()
  },
  methods: {
    // loadManifest(manifestUrl) {
    //   this.manifestUrl = manifestUrl

    //   // eslint-disable-next-line no-new, no-undef
    //   this.tify = new Tify({
    //     container: '#tify',
    //     manifestUrl: this.manifestUrl,
    //     pages: this.manifestUrl === defaultManifestUrl ? [2, 3] : [1],
    //     urlQueryKey: 'tify',
    //   })
    // },
  },
}
</script>

<style lang="scss" scoped>
@import '@/styles/settings';

.frame {
  width: 44rem;
  height: 22rem;
  left: 50%;
  transform: translate(-50%);
}
dl {
  margin-bottom: 30px;
}
dt {
  font-weight: bold;
}
</style>

<style lang="scss">
@import '@/styles/settings';

.readme {
  // Options and API parameters
  > ul {
    list-style: none;
    padding-left: .5rem;

    > li {
      position: relative;

      &::before {
        background: rgba($blue, .25);
        content: '';
        display: block;
        left: -.5rem;
        top: 4px;
        bottom: 2px;
        position: absolute;
        width: 4px;
        border-radius: 2px;

        .dark & {
          filter: brightness(2);
        }
      }
    }
  }
}
.navbuttons {
  margin: auto;
  text-align: center;
  margin: 0 0 20px 0;
}
.sample-manifests {
  .current {
    background: $link-color;
    color: $white;

    a {
      color: inherit;

      &:focus,
      &:hover {
        background: $shine;
      }
    }
  }
}
</style>
