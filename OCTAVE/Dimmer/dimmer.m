% Parameters for the 2D dimmer model
T = 10; % Total time in seconds
dt = 0.1; % Time step in seconds
f = 1; % Frequency in Hz
A = 1; % Amplitude (max intensity)
N = 50; % Number of grid points along one dimension

% Time vector
t = 0:dt:T;

% Create a 2D grid
[x, y] = meshgrid(1:N, 1:N);

% Initialize figure for animation
figure;
colormap('hot');
caxis([0 A]);
colorbar;

% Loop over time steps
for k = 1:length(t)
    % Calculate light intensity at each grid point
    I = A * (1 + sin(2 * pi * f * t(k) + 2 * pi * x / N + 2 * pi * y / N)) / 2;

    % Plot the light intensity
    imagesc(I);
    title(sprintf('2D Dimmer Model Simulation (t = %.2f s)', t(k)));
    xlabel('X');
    ylabel('Y');
    pause(0.1);
end

