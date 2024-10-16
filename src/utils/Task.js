const trainingPlan = [
    {
      day: 1,
      morning: "Introduction to Spring Boot, Spring Boot vs. traditional Spring",
      afternoon: "Setting up development environment, Project setup with Spring Initializr",
      topic: "Spring Boot Fundamentals",
      category: "Spring Boot"
    },
    {
      day: 2,
      morning: "Core Spring annotations (@Component, @Autowired, @Configuration, etc.)",
      afternoon: "Dependency Injection in Spring Boot, ApplicationContext and Beans",
      topic: "Spring Boot Fundamentals",
      category: "Spring Boot"
    },
    {
      day: 3,
      morning: "REST principles and best practices",
      afternoon: "Creating REST endpoints with @RestController, Request mapping",
      topic: "REST APIs",
      category: "Spring Boot"
    },
    {
      day: 4,
      morning: "Path variables and request parameters, Request body handling with @RequestBody",
      afternoon: "Response entity and status codes",
      topic: "REST APIs",
      category: "Spring Boot"
    },
    {
      day: 5,
      morning: "Configuring Spring Boot applications, application.properties vs. application.yml",
      afternoon: "Externalizing configuration, Spring Profiles",
      topic: "Spring Boot Fundamentals",
      category: "Spring Boot"
    },
    {
      day: 6,
      morning: "Data validation using Bean Validation API, Custom validators",
      afternoon: "Exception handling with @ControllerAdvice, Creating custom exceptions",
      topic: "Spring Boot Fundamentals",
      category: "Spring Boot"
    },
    {
      day: 7,
      morning: "Start building a comprehensive REST API implementing all concepts learned this week",
      afternoon: "Continue API development, Review week's concepts",
      topic: "REST APIs",
      category: "Spring Boot"
    },
    {
      day: 8,
      morning: "Introduction to ORM and JPA, Setting up Spring Data JPA",
      afternoon: "Defining entities and repositories",
      topic: "Data Persistence",
      category: "Database"
    },
    {
      day: 9,
      morning: "Basic CRUD operations with JpaRepository",
      afternoon: "Customizing repository queries",
      topic: "Data Persistence",
      category: "Database"
    },
    {
      day: 10,
      morning: "Complex database relationships (One-to-Many, Many-to-Many)",
      afternoon: "Lazy vs. Eager loading",
      topic: "Data Persistence",
      category: "Database"
    },
    {
      day: 11,
      morning: "Query methods in repositories, Using @Query for custom queries",
      afternoon: "Pagination and sorting",
      topic: "Data Persistence",
      category: "Database"
    },
    {
      day: 12,
      morning: "Understanding transactions in Spring, @Transactional annotation",
      afternoon: "Transaction propagation and isolation levels",
      topic: "Data Persistence",
      category: "Database"
    },
    {
      day: 13,
      morning: "Caching concepts in Spring, Setting up caching with @Cacheable",
      afternoon: "Cache eviction and updating",
      topic: "Data Persistence",
      category: "Database"
    },
    {
      day: 14,
      morning: "Unit testing with JUnit and Mockito",
      afternoon: "Testing Spring MVC controllers, Testing JPA repositories",
      topic: "Testing",
      category: "Testing"
    },
    {
      day: 15,
      morning: "Introduction to Spring Security, Configuring Spring Security",
      afternoon: "Authentication vs. Authorization",
      topic: "Security",
      category: "Security"
    },
    {
      day: 16,
      morning: "Understanding JWT",
      afternoon: "Implementing JWT authentication",
      topic: "Security",
      category: "Security"
    },
    {
      day: 17,
      morning: "Introduction to OAuth2",
      afternoon: "Setting up OAuth2 with Spring Security",
      topic: "Security",
      category: "Security"
    },
    {
      day: 18,
      morning: "Microservices architecture principles",
      afternoon: "Advantages and challenges of microservices",
      topic: "Microservices",
      category: "Microservices"
    },
    {
      day: 19,
      morning: "Service discovery concepts",
      afternoon: "Setting up Eureka server and clients",
      topic: "Microservices",
      category: "Microservices"
    },
    {
      day: 20,
      morning: "API Gateway pattern with Spring Cloud Gateway",
      afternoon: "Routing and filtering requests",
      topic: "Microservices",
      category: "Microservices"
    },
    {
      day: 21,
      morning: "RESTful API best practices, HATEOAS principles",
      afternoon: "API versioning strategies, Project work on implementing learned concepts",
      topic: "REST APIs",
      category: "Spring Boot"
    },
    {
      day: 22,
      morning: "Complex SQL queries (joins, subqueries)",
      afternoon: "Indexing strategies",
      topic: "Database",
      category: "Database"
    },
    {
      day: 23,
      morning: "Query optimization techniques",
      afternoon: "Implementing and using stored procedures",
      topic: "Database",
      category: "Database"
    },
    {
      day: 24,
      morning: "Introduction to MongoDB, Setting up MongoDB with Spring Boot",
      afternoon: "Basic CRUD operations with MongoRepository",
      topic: "NoSQL",
      category: "Database"
    },
    {
      day: 25,
      morning: "Advanced MongoDB queries",
      afternoon: "Aggregation framework",
      topic: "NoSQL",
      category: "Database"
    },
    {
      day: 26,
      morning: "Metrics collection with Prometheus",
      afternoon: "Creating dashboards with Grafana",
      topic: "Monitoring",
      category: "DevOps"
    }
  ];

export default trainingPlan;