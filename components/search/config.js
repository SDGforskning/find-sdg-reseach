import Connector from "../../services/APIConnector";
const connector = new Connector({});

const config = {
  apiConnector: connector,
  alwaysSearchOnInitialLoad: true,
  searchQuery: {
    search_fields: {
      result_title: {},
      SDG_topic: {},
      SDG_target_topic: {},
      SDG_action: {},
      SDG_target_action: {},
      category: {},
      subcategory: {},
    },
    result_fields: {
      result_title: { raw: {} },
      journal: { raw: {} },
      openlinkfound: { raw: {} },
      OA_status_calc: { raw: {} },
      SDG_action: { raw: {} },
      SDG_topic: { raw: {} },
      SDG_target_action: { raw: {} },
      SDG_target_topic: { raw: {} },
      category: { raw: {} },
      subcategory: { raw: {} },
      doi: { raw: {} },
      eissn: { raw: {} },
      fulldoi: { raw: {} },
      fulltextlink: { raw: {} },
      language: { raw: {} },
      mentionssdgno: { raw: {} },
      mentionsNorway: { raw: {} },
      mentionsSDG: { raw: {} },
      nvi_level_historical: { raw: {} },
      nvi_publication_form: { raw: {} },
      result_id: { raw: {} },
      result_title: { raw: {} },
      scientific_field_npi: { raw: {} },
      scientific_result: { raw: {} },
      year: { raw: {} },
    },
    // OR FACETS!!!!
    disjunctiveFacets: [
      "category.keyword",
      "subcategory.keyword",
      "scientific_field_npi.keyword",
      /* "SDG_topic.keyword",
      "SDG_target_topic.keyword",
      "SDG_action.keyword",
      "SDG_target_action.keyword", */
      "year.keyword",
      "mentionssdgno.keyword",
      /* "mentionsNorway.keyword",
      "mentionsSDG.keyword" */
    ],
    facets: {
      "openlinkfound.keyword": { type: "value" },
      "language.keyword": { type: "value" },
      "OA_status_calc.keyword": { type: "value" },
      "nvi_level_historical.keyword": { type: "value" },
      "SDG_topic.keyword": { type: "value", size: 30, sort: "count" },
      "SDG_target_topic.keyword": { type: "value", size: 30, sort: "count" },
      "SDG_action.keyword": { type: "value", size: 30, sort: "count" },
      "SDG_target_action.keyword": { type: "value", size: 30, sort: "count" },
      "category.keyword": { type: "value" },
      "subcategory.keyword": { type: "value" },
      "scientific_field_npi.keyword": { type: "value" },
      "scientific_result.keyword": { type: "value" },
      "year.keyword": { type: "value" },
      "mentionssdgno.keyword": { type: "value" },
      // "mentionsSDG.keyword": { type: "value" },
      // "mentionsNorway.keyword": { type: "value" },
    }
  },
  /* autocompleteQuery: {
    results: {
      search_fields: {
        search_as_you_type: {}
      },
      resultsPerPage: 5,
      result_fields: {
        result_title: {
          snippet: {
            size: 100,
            fallback: true
          }
        },
        result_id: {
          raw: {}
        }
      }
    },
    suggestions: {
      types: {
        documents: {
          fields: ["parks_completion"]
        }
      },
      size: 4
    }
  } */
};

export default config