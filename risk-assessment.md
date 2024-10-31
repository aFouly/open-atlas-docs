---
sidebar_position: 3
---

# Risk Assessment

The risk assessment is the key step in the EUDR compliance process. The risk assessment includes a set of criteria defined in [Article 10 of the regulation](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32023R1115#d1e1773-206-1). Open Atlas Vantage product performs an assessment for the following criteria:

- (b) the presence of forests in the country of production or parts thereof;
- (c)(d)(e) information about Indigenous peoples;
- (f) prevalence of deforestation or forest degradation in the country of production or parts thereof;
- (a)(g) and other location-specific information to support that products are deforestation-free and produced in accordance with the relevant legislation in the country of production (e.g. presence of protected areas).

Vantage returns detailed information about each of the criteria and a general assessment of the registered plot of land.

# **Risk Assessment on Vantage API**

Risk assessment can be run for one or many previously registered plots of land. To do that, you need to create a job using the `POST /jobs/make_job` endpoint. In a single job, you can add up to 10000 plots. The process is asynchronous and the job has multiple statuses:

- `creating` - the job has been registered.
- `pending` - the job has been successfully created; the risk assessment is in progress.
- `done` - the job has been successfully finished, and the risk assessment has been run for all plots.
- `incomplete` - some of the plots in the job failed to complete the risk assessment.

:::tip Information

Please note that if a job is `incomplete`, any tokens reserved for plots that did not complete the analysis will be reimbursed.

:::

## **Job Information**

To check the status of the job, the `POST /jobs/retrieve_job` endpoint should be used. Once the job is done, the job object provides the following information:

- General information about the job.
- The analysis information, that includes:
    - Plot and analysis summary
    - Risk level summary
    - Deforestation assessment
    - Protected areas assessment
- Risk assessment visualisation

The following is an example of the job response:

```
{
    "username": "Your username",
    "notes": "Optional notes to add",
    "job_id": "b39a190a-cc19-47c8-a545-13be67c79dd9",
    "job_name": "Name of the job",
    "plot_ids": [
        "6d6c9e9d-d06a-43fe-9eb9-c4e4793b9d61"
    ],
    "created_at": "2024-10-28T14:09:14",
    "updated_at": "2024-10-28T14:10:23",
    "company_id": "Name of the company",
    "additional_info": {...},
    "token_cost": 4,
    "harvest_date": "2024-08-31",
    "status": "done",
    "plots": [...],
    "job_visualization_url": [
        "https://..."
    ]
}
```

## **General Information about the Job**

The following represents a set of parameters describing the job.

- `username` - the username who created the plot.
- `notes` - optional notes added to describe the job.
- `job_id` - the unique identifier of the job.
- `job_name` - the given name of the job.
- `created_at` - information about when the job was created.
- `updated_at` - information about when the job was updated the last time.
- `company_id` - the unique identifier of the company.
- `token_cost` - the reserved number of analysis tokens for this job.
- `harvest_date` - commodity production date.
- `plots` - a list of plots the analysis was run. It provides detailed information about the plot and the risk assessment associated with the plot that is described in the `analysis` object.

## **Analysis Information**

The information about each assessment criterion is returned in the `analysis` object for each plot in the form of calculated values.

The following is an example of the JSON response:

```
{
    "analysisEnd": "2024-08-01",
    "risk_level": "Low",
    "forest_percentage_2020": 78.60163445145147,
    "logging_area": 0.0,
    "forest_area_2020": 2.1427187627696838,
    "risk_reason": "Low deforestation, low forest area",
    "areaHa": 2.726048609196721,
    "protectedAreas": [],
    "deforestation": {
        "total_yearly": {
            "2023": 0.10713593813848418
        },
        "total_yearly_jrc": {
            "2023": 0.04869815369931099
        },
        "total": 0.10713593813848418,
        "total_jrc": 0.10713593813848418
    },
    "deforestation_percentage": 3.9300817225725737
}
```

### Plot and Analysis Summary

The following fields describe the timeframe of the analysis was run for (starting 31st of December 2020) and the total area of the plot:

- `analysisEnd` - the date of the end of the analysis.
- `areaHa` - plot area, in hectares.

### Risk Level Summary

Values in `risk_level` and `risk_reason` provide a general assessment score for the plot of land. Vantage attributes one of three risk ratings to plots through its analysis of their deforestation status:

- `High` - total deforestation area detected covers more than 15% of plot area or more than 1 hectare.
- `Medium` - total deforestation area detected covers more than 10% and less or equal to 15% of plot area or more than 1 hectare.
- `Low` - total deforestation area detected covers less than 10% of plot area or less than 0.5 hectare.

### Deforestation Assessment

Our deforestation detection system combines real-time, high-resolution data with other well-known, publicly vetted deforestation methodologies. Our multi-layered approach allows to detect forest disturbances and degradation with high precision.

:::tip Information

More details on the methods used can be found in our white paper.

:::

Once the risk assessment is run for a provided plot of land, the API response provides a summary of forest coverage and deforestation:

- `forest_area_2020` - the area within a plot covered in forests dated 31st of December 2020, in hectares.
- `forest_percentage_2020` - the percentage of the plot area covered in forests dated 31st of December 2020.
- `logging_area` - the area with logging detected, in hectares.
- `deforestation_percentage` - the percentage of the plot with the detected deforestation.

In addition, a detailed information about deforestation is returned:

- `total_yearly` - total area with detected deforestation broken out into years, in hectares.
- `total_yearly_jrc` - total area with detected deforestation based on the [JRC forest layer](https://forobs.jrc.ec.europa.eu/GFC) broken out into years, in hectares.
- `total` - total area with detected deforestation, in hectares.
- `total_jrc` - total area with detected deforestation based on the [JRC forest layer](https://forobs.jrc.ec.europa.eu/GFC) broken out into years, in hectares.

### Protected Area Assessment

Vantage Risk Assessment provides information if the plot overlaps with the protected area. The returned information is compatible with the [World Database on Protected Areas](https://en.wikipedia.org/wiki/World_Database_on_Protected_Areas).

:::tip Information

Please note, that this is an experimental capability and is currently provided for exploratory and evaluation purposes.

:::

## **Risk assessment visualisation**

Vantage API provides a visualisation of plot temporal change between the 31st of December 2020 and the harvest date. The visualisation is available as a link under the `job_visualization_url` field.

![Example of the visual representation of risk assessment.](./img/visual-results.png)

Example of the visual representation of risk assessment.

The visualisation is produced for each plot. The visualisation provides two pairs of images:

- The first row represents the satellite imagery on the last available date in December 2020 (depending on image availability and cloud coverage) and on the harvest date.
- Forest cover and the detected deforestation on the same two dates.

The yellow contour represents the plot boundaries.