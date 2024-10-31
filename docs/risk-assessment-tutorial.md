---
sidebar_position: 4
---

# Risk Assessment Tutorial

Read this tutorial if you are looking for a step-by-step guide on how to create a plot, run an EUDR risk assessment analysis and retrieve information about its results.

In this guide, you will learn how to:

- Authenticate to Open Atlas Vantage product
- Retrieve information about analytics tokens
- Register a plot
- Create an analysis job
- Retrieve and interpret analysis results

# **Authentication**

Vantage API supports basic authentication that requires `user` and `password` you’ll receive during the onboarding session.

```
curl --location -X POST 'https://vantage.open-atlas.com/login' \
--user 'user:password'
```

The endpoint returns the JWT that is valid for 60 minutes. We recommend storing it in the local environment for security and reusability reasons.

```
export YOUR_BEARER_TOKEN="xxx…xxx"
```

Now, with the token, you can access all other endpoints. You need to specify it in the `Authorization` header. The following example returns information about analysis tokens that can be used to run EUDR risk assessment analysis. 

```
curl -X GET 'https://vantage.open-atlas.com/users/check_tokens' \
  -H "Authorization: Bearer $YOUR_BEARER_TOKEN"
```

The information has three main fields:

- “Token balance” defines the total number of tokens that have been allocated to your account.
- “Reserved Tokens” are the total number of tokens that have been used to run risk assessment. Please note that if a job is incomplete, any tokens reserved for plots that did not complete the analysis will be reimbursed. More information is on the [“Risk assessment page”](./risk-assessment.md).
- “Free Tokens” are tokens that are available to run risk assessment.

# **Registering Plots**

The next stage is to register geolocations of plots. Later, you can use them to run a risk assessment analysis. As per [EUDR requirements](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32023R1115#d1e933-206-1), plots could be represented as points or polygons for areas that are smaller than four hectares and must be polygons for larger areas. The [GeoJSON geometry object](https://datatracker.ietf.org/doc/html/rfc7946#section-3.1) specification is used for defining the geometry.

Each plot must have information about the commodity and the production time. More information about Plots is available on the [“Plot of Land” page](./plot-of-land.md).

The `POST /plots/make_plot` endpoint allows registering both point and polygon geometry types. The following is an example of registering the point geometry:

```
curl -X POST 'https://vantage.open-atlas.com/plots/make_plot' \
-H "Authorization: Bearer YOUR_BEARER_TOKEN" \
-H "Content-Type: application/json" \
-d '{
  "geojson": {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Point",
          "coordinates": [107.880247, 14.093255]
        }
      }
    ]
  },
  "plot_name": "Name of the Plot",
  "commodity": "cocoa",
  "harvest_date": "2022-04-01",
  "notes": "Optional notes to add",
  "additional_info": {
    "phone": "Phone Number",
    "owner": "Company Name"
  }
}'
```

To register the polygon geometry, the request body is the same, except for the geometry definition. Here is an example of the polygon geometry:

```
{
  "coordinates": [
    [
      [
        19.964949370979213,
        0.3453748381975714
      ],
      [
        19.895702998305723,
        0.3624724076695145
      ],
      [
        19.827326919249742,
        0.31884518162797804
      ],
      [
        19.86923359715044,
        0.2136700976160455
      ],
      [
        20.135891341530566,
        0.2008452821354325
      ],
      [
        19.964949370979213,
        0.3453748381975714
      ]
    ]
  ],
  "type": "Polygon"
}
```

Once run, the endpoint returns the information with the registered plot with a few extra fields:

- `username` - the username who created the plot.
- `country` - the country where the plot is located.
- `state` - the state, within the country, where the plot is located.
- `analysis` - the analysis information about the plot. At this stage, this is empty and will be filled once the analysis is run.
- `plot_id` - the unique identifier of the plot. You will need this ID to create an analysis job in the next stage.
- `lat` - the latitude of the center of the plot. For point geometry, it is the same as the latitude that was provided.
- `lon` - the longitude of the center of the plot. For point geometry, it is the same as the longitude that was provided.
- `area_ha` - the area of the plot in hectares.
- `tokens_cost` - the estimated number of analysis tokens to run the risk assessment analysis. Please note, that tokens are not yet reserved.
- `created_at` - information about when the plot was created.
- `updated_at` - information about when the plot was updated the last time.
- `company_id` - the unique identifier of the company.
- `analysis_image` - the link to the analysis image. Will be empty at this stage, but filled once the analysis is run.

:::tip Information

Please note, that while creating a plot for the point target, the endpoint returns the polygon geometry. The system creates a buffer around  the provided point geometry to make a plot with a size of 4 hectares.

:::

# **Risk Assessment**

Now, with having a plot registered, you can run the EUDR risk assessment. You can do that by creating a job. The process of running risk assessment is asynchronous, so you need to create a job first and then retrieve results.

To create a job, you need to use the `POST /jobs/make_job` endpoint.

Please note, that at this stage, your tokens will be reserved.

```
curl -X POST 'https://vantage.open-atlas.com/jobs/make_job' \
-H "Authorization: Bearer YOUR_BEARER_TOKEN" \
-H "Content-Type: application/json" \
-d '{
  "plot_ids": [
    "ab5c45e9-2e18-416b-adb0-9c6cb1536594",
    "de57aef7-99e5-4ec3-b2f2-8aba6f5f6261"
  ],
  "job_name": "Name of your analysis job",
  "notes": "Optional notes to add",
  "additional_info": {
    "phone": "Phone Number",
    "address": "Address"
  }
}'

```

Plot IDs field represents a set of plots you want to run an assessment for. You can provide up to 10000 plots in a single job.

Once run, the endpoint returns the information with the created job that has a few extra fields that are described on the [“Risk assessment page”](./risk-assessment.md). In order to retrieve results of the job, you must retrieve the `job_id` value - the unique identifier of the job.

# **Retrieving Risk Assessment Results**

In general, there are two ways of retrieving results: by analysis job or by plot. In both cases, we provide information visual information and the calculated risk assessment.

The `GET /jobs/retrieve_job/{{job_id}}` endpoint returns information about the job using the `job_id`. The information is provided under the `plots` list. In addition, there is a link to the visual representation of the analysis. It is available under each plot in `analysis_image` or in the `job_visualization_url`. Please check the [“Risk assessment page”](./risk-assessment.md) for more information.

You can also retrieve analysis information for each specific plot using the `GET /plots/get_plot/{{plot_id}}` endpoint.