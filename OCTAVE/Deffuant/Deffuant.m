% Parameters
L = 50; % Size of the grid (LxL)
mu = 0.5; % Convergence parameter
epsilon = 0.2; % Confidence threshold
num_steps = 10000000; % Number of simulation steps

% Initialize opinions randomly in [0, 1]
opinions = rand(L, L);

% Function to get toroidal neighbor indices
function idx = toroidal_index(x, L)
    idx = mod(x-1, L) + 1;
end

% Simulation loop
for step = 1:num_steps
    % Randomly select an agent
    x1 = randi(L);
    y1 = randi(L);

    % Randomly select one of its 4 neighbors
    direction = randi(4);
    if direction == 1
        x2 = toroidal_index(x1 + 1, L); y2 = y1; % Right neighbor
    elseif direction == 2
        x2 = toroidal_index(x1 - 1, L); y2 = y1; % Left neighbor
    elseif direction == 3
        x2 = x1; y2 = toroidal_index(y1 + 1, L); % Top neighbor
    else
        x2 = x1; y2 = toroidal_index(y1 - 1, L); % Bottom neighbor
    end

    % Get the opinions of the selected pair
    op1 = opinions(x1, y1);
    op2 = opinions(x2, y2);

    % Apply the Deffuant interaction rule
    if abs(op1 - op2) < epsilon
        opinions(x1, y1) = op1 + mu * (op2 - op1);
        opinions(x2, y2) = op2 + mu * (op1 - op2);
    end
    step
end

% Display the final opinion distribution
imagesc(opinions);
colorbar;
title('Final Opinion Distribution on a Torus');
xlabel('X');
ylabel('Y');

